# MAST API ingestion logic
from astroquery.mast import Observations
from datetime import datetime

def query_mast_by_coordinates(ra, dec, radius):
    """
    Query MAST for observations around given coordinates.

    Parameters:
    ra (float): Right Ascension in degrees.
    dec (float): Declination in degrees.
    radius (float): Search radius in arcseconds.

    Returns:
    list: List of observation records.
    """
    # Convert radius from arcseconds to degrees
    radius_deg = radius / 3600.0

    # Query MAST
    obs_table = Observations.query_region(f"{ra} {dec}", radius=radius_deg)

    # Convert to list of dictionaries for easier processing
    observations = obs_table.to_pandas().to_dict(orient='records')
    
    return observations

def download_observation_products(obs_id, download_dir: str = "./data"):
    """
    Download products for a given observation ID.

    Parameters:
    obs_id (str): Observation ID.

    Returns:
    list: List of downloaded file paths.
    """
    products = Observations.get_product_list(obs_id)
    manifest = Observations.download_products(products, download_dir=download_dir)
    
    return manifest