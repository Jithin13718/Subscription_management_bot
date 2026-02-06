# churnModel.py
import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
import joblib

MODEL_PATH = "models/churn_model.pkl"

class ChurnModel:
    def __init__(self):
        try:
            self.model = joblib.load(MODEL_PATH)
            print("Churn model loaded successfully.")
        except:
            print("No trained model found. Initializing new model.")
            self.model = LogisticRegression()

    def train(self, data: pd.DataFrame, labels: pd.Series):
        """
        Train churn model with subscription data.
        data: DataFrame with features (usage, billing, support tickets, etc.)
        labels: Series with churn labels (0 = retained, 1 = churned)
        """
        self.model.fit(data, labels)
        joblib.dump(self.model, MODEL_PATH)
        print("Churn model trained and saved.")

    def predict(self, features: np.array) -> float:
        """
        Predict churn probability for a single user.
        features: numpy array of user features
        Returns: churn probability (0–1)
        """
        prob = self.model.predict_proba([features])[0][1]
        return float(prob)

# Example usage
if __name__ == "__main__":
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
    print("Churn probability:", churn.predict(test_user))
