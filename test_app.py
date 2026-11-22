import unittest

from app import app


class DashboardTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_index(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)

    def test_questions_are_returned(self):
        response = self.client.get("/api/questions")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.get_json()), 12)

    def test_wiki_filter(self):
        response = self.client.get("/api/wiki?category=Imagem&q=RGB")
        terms = response.get_json()
        self.assertEqual(len(terms), 1)
        self.assertEqual(terms[0]["term"], "RGB")

    def test_wiki_search_ignores_accents(self):
        response = self.client.get("/api/wiki?q=pixel")
        terms = response.get_json()
        self.assertEqual(len(terms), 1)
        self.assertEqual(terms[0]["term"], "Píxel")

    def test_calculation(self):
        response = self.client.post(
            "/api/calculate",
            json={"width": 1920, "height": 1080},
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.get_json(),
            {
                "resolution": "1920 × 1080",
                "total_pixels": 2073600,
                "megapixels": 2.07,
                "ratio": "16:9",
            },
        )

    def test_invalid_calculation(self):
        response = self.client.post(
            "/api/calculate",
            json={"width": 0, "height": 1080},
        )
        self.assertEqual(response.status_code, 400)
        self.assertIn("error", response.get_json())


if __name__ == "__main__":
    unittest.main()
