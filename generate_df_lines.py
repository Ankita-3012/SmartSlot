import pandas as pd

# Load order file
orders = pd.read_csv("data/dataset/Customer_Order.csv", sep=";")

# Clean columns
orders.columns = orders.columns.str.strip().str.replace(" ", "_").str.lower()

# Extract only what we need
df = orders[['ordernumber', 'reference', 'quantity_(units)']]
df.columns = ['order_id', 'SKU', 'qty']

# Add placeholder x, y
df['x'] = None
df['y'] = None

# Save to static/in
df.to_csv("static/in/df_lines.csv", index=False)
print("✅ df_lines.csv created (without coordinates)")
