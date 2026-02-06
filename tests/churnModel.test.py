# churnModel.test.py
import pytest
import numpy as np
import pandas as pd
from src.models.churnModel import ChurnModel

def test_churn_model_training_and_prediction(tmp_path):
    # Dummy training data
    X = pd.DataFrame({
        "usage": [100, 50, 10],
        "billing_issues": [0, 1, 2],
        "support_tickets": [1, 0, 3]
    })
    y = pd.Series([0, 0, 1])

    churn = ChurnModel()
    churn.train(X, y)

    test_user = np.array([30, 1, 1])
    prob = churn.predict(test_user)

    assert 0.0 <= prob <= 1.0
