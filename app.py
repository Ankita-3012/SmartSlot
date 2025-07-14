import streamlit as st
import pandas as pd
import os
from utils.ai.slotting import apply_abc_slotting
from utils.batch.simulation_batch import simulate_total_distance

st.set_page_config(page_title="SmartSlot AI", layout="wide")
st.title("📦 SmartSlot - AI Optimized Slotting")

# === Check if reslotted file exists
reslotted_exists = os.path.exists("static/in/df_lines_reslotted.csv")

# === Dropdown Options
layout_options = ["Original"]
if reslotted_exists:
    layout_options.append("AI Reslotted")

# === Layout Selector
layout_type = st.selectbox("Choose Layout", layout_options)

# === Filepath Selection
filename = "df_lines.csv" if layout_type == "Original" else "df_lines_reslotted.csv"
filepath = os.path.join("static", "in", filename)

# === Load and Display Data
if os.path.exists(filepath):
    df = pd.read_csv(filepath)
    st.success(f"✅ Loaded {filename}")
    st.dataframe(df.head())

    # === Apply AI Slotting Button (only when Original is selected)
    if layout_type == "Original":
        if st.button("Apply AI Slotting"):
            df_reslotted = apply_abc_slotting(df.copy())
            df_reslotted.to_csv("static/in/df_lines_reslotted.csv", index=False)
            st.success("✅ AI Slotting applied and saved! Refresh the app to see 'AI Reslotted' in dropdown.")

    # === Simulate Distance Button (for any layout with coordinates)
    if all(col in df.columns for col in ["x", "y"]) and df["x"].notnull().any() and df["y"].notnull().any():
        if st.button("Simulate Picking Distance"):
            distance = simulate_total_distance(df)
            st.metric(label="🛒 Total Picking Distance", value=f"{distance:.2f} meters")
    else:
        st.warning("⚠️ Coordinates missing. Please apply AI Slotting or check your data.")
else:
    st.error("❌ File not found. Please generate df_lines.csv in static/in/")
