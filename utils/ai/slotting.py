import pandas as pd
import numpy as np

def apply_abc_slotting(df):
    # Ensure numeric qty
    df['qty'] = pd.to_numeric(df['qty'], errors='coerce').fillna(0)

    # Create ABC classification
    try:
        df['ABC'] = pd.qcut(df['qty'], q=3, labels=['C', 'B', 'A'])
    except ValueError:
        df['ABC'] = 'C'

    # Use extremely tight slotting zones (clustered on same aisle)
    cluster_centers = {
        'A': {'x': 10, 'y': 5},
        'B': {'x': 12, 'y': 5},
        'C': {'x': 14, 'y': 5}
    }

    # Apply small jitter only within 1 unit (optional: 0 if you want exact same spot)
    df['x'] = df['ABC'].map(lambda cat: cluster_centers[cat]['x']) + np.random.randint(0, 2, size=len(df))
    df['y'] = df['ABC'].map(lambda cat: cluster_centers[cat]['y']) + np.random.randint(0, 2, size=len(df))

    return df
