from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

MONGO_URL = MongoClient("mongodb+srv://mohamedvaseem:mohamedvaseem@anime-galaxy.7lnts.mongodb.net/")
db = MONGO_URL["portfolio-fb"]
collection = db["feedbacks"]

@app.route("/feedbacks", methods=["POST"])
def feedback():
    try:
        # Get JSON data from request
        data = request.get_json()

        name = data.get('name')
        email = data.get('email')
        feedback_text = data.get('text')

        # Insert into MongoDB
        collection.insert_one({"time":datetime.utcnow(),"name": name, "email": email, "feedback": feedback_text})

        # Return success response
        return jsonify({"message": "Feedback submitted successfully!"}), 201

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Internal Server Error"}), 500 
    
@app.route("/get-fb",methods = ["GET"])
def getfb():
    try:
        feedback_list = []
        for fb in collection.find():
            feedback_list.append({
                "time": fb["time"].isoformat(),
                "name": fb["name"],
                "email":fb["email"],
                "feedback":fb["feedback"]
            })
        print(feedback_list)
        return jsonify({"feedback_list":feedback_list}),200
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Internal Server Error"}), 500  # Generic server error

if __name__ == "__main__":
    app.run(debug=True);

