import pandas as pd
import numpy as np

def simulate_total_distance(df):
    # Convert x and y to meters if needed (adjust if already in meters)
    df['x'] = pd.to_numeric(df['x'], errors='coerce') / 100  # assuming cm
    df['y'] = pd.to_numeric(df['y'], errors='coerce') / 100

    distance = 0
    grouped = df.groupby("order_id")

    for _, group in grouped:
        coords = group[['x', 'y']].dropna().values
        if len(coords) < 2:
            continue
        # Sort roughly by warehouse layout (can be improved)
        coords = sorted(coords, key=lambda k: (k[0], k[1]))
        order_distance = sum(
            ((coords[i][0] - coords[i - 1][0]) ** 2 + (coords[i][1] - coords[i - 1][1]) ** 2) ** 0.5
            for i in range(1, len(coords))
        )
        distance += order_distance

    return distance
