from flask import Flask, request, jsonify
from flask_cors import CORS
import asyncio
import arkprts

app = Flask(__name__)
CORS(app, origins=["http://localhost:8080"])



@app.route("/members")
def member():
    return {"member": ["member1","member2","member3"]}

@app.route("/")
def home():
    return "Welcome Ai na Sonteen"


@app.route("/code", methods=['POST'])
async def code():
    public_Client = arkprts.Client()
    request_data = request.json
    emailData = request_data.get("email")
    auth = arkprts.YostarAuth("en", network=public_Client.network)
    await auth.get_token_from_email_code(emailData)

    return "Code sent!"

@app.route("/importData", methods=['POST'])
async def importData():
    public_Client = arkprts.Client()
    request_data = request.json
    email = request_data.get("email")
    otp = request_data.get("verificationCode")
    auth = arkprts.YostarAuth("en", network=public_Client.network)
    await auth.login_with_email_code(email, otp)

    client = arkprts.Client(auth=auth, assets=False)
    data = await client.get_data()
    total_char = len(data.troop.chars)
    collection = []

    for char in data.troop.chars.values():
        operator_info = {
            "id": char.char_id,
            "promotion": char.evolve_phase,
            "potencials": char.potential_rank,
            "level": char.level,
            "skillLevel": char.main_skill_lvl,
            "mastery": [],
        }

        for skill in char.skills:
            skillId = skill.skill_id
            masteryLevel = skill.specialize_level
            operator_info["mastery"].append({
                "skillId": skillId,
                "masteryLevel": masteryLevel,
            })
        collection.append(operator_info)




    return {"Assistant": data.status.secretary , "UID": data.status.uid ,"Level": data.status.level, "Name": data.status.nickname + '#' + data.status.nick_number,  "Hired": data.status.register_ts, "total": total_char, "Collection": collection, }
 
@app.route("/operator")
async def operator():
    str = ""
    public_Client = arkprts.Client()
    data = await public_Client.get_data()
    for char in data.troop.chars.values():
        str += char.char_id

    return {str} 

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port="5000")