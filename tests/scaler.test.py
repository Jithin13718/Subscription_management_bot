# scaler.test.py
import pytest
from src.models.scaler import ScaleDownCompressor

def test_scaler_compression():
    docs = [
        "Basic plan includes limited features and support.",
        "Pro plan offers advanced analytics and premium support.",
        "Enterprise plan provides full customization and dedicated account manager."
    ]

    compressor = ScaleDownCompressor(n_components=2)
    compressed = compressor.fit_transform(docs)

    assert compressed.shape[0] == len(docs)
    assert compressed.shape[1] == 2
