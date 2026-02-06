# scaler.py
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD

class ScaleDownCompressor:
    def __init__(self, n_components=50):
        self.vectorizer = TfidfVectorizer(stop_words="english")
        self.svd = TruncatedSVD(n_components=n_components)

    def fit_transform(self, documents):
        """
        Compress subscription documentation by ~75%
        documents: list of strings (feature docs, plan descriptions)
        Returns: compressed vectors
        """
        tfidf_matrix = self.vectorizer.fit_transform(documents)
        compressed = self.svd.fit_transform(tfidf_matrix)
        return compressed

    def transform(self, documents):
        """
        Apply existing compression model to new docs
        """
        tfidf_matrix = self.vectorizer.transform(documents)
        compressed = self.svd.transform(tfidf_matrix)
        return compressed

# Example usage
if __name__ == "__main__":
    docs = [
        "Basic plan includes limited features and support.",
        "Pro plan offers advanced analytics and premium support.",
        "Enterprise plan provides full customization and dedicated account manager."
    ]

    compressor = ScaleDownCompressor(n_components=2)
    compressed_docs = compressor.fit_transform(docs)
    print("Compressed vectors:", compressed_docs)
