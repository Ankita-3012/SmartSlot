# utils/routing/distances.py

import numpy as np

def distance_picking(route):
    distance = 0.0
    for i in range(1, len(route)):
        x1, y1 = route[i-1]
        x2, y2 = route[i]
        distance += np.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return round(distance, 2)

def create_route(df):
    # Sort by y descending (simulate basic pick path)
    df_sorted = df.sort_values(by='y', ascending=False)
    route = list(zip(df_sorted['x'], df_sorted['y']))
    # Start from origin
    return [(0, 0)] + route + [(0, 0)]
