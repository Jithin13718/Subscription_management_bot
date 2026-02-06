
# trainChurnModel.py
import pandas as pd
import numpy as np
from src.models.churnModel import ChurnModel

def main():
    # Example training dataset
    data = pd.DataFrame({
        "usage": [120, 80, 30, 10, 200],
        "billing_issues": [0, 1, 2, 3, 0],
        "support_tickets": [1, 0, 2, 4, 0]
    })
    labels = pd.Series([0, 0, 1, 1, 0])  # 0 = retained, 1 = churned

    churn = ChurnModel()
    churn.train(data, labels)

    # Test prediction
    test_user = np.array([50, 1, 1])
    prob = churn.predict(test_user)
    print("Churn probability for test user:", prob)

if __name__ == "__main__":
    main()
