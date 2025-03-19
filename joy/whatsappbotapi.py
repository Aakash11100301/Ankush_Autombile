import whatsappbot as wa
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.post("/whatsappsmsinstant")

def whatsappsmsinstant():
    if request.is_json:
        whatsappmsg = request.get_json()
        phone_no=whatsappmsg["to"]
        message=whatsappmsg["message"]
        try:
            wa.sendwhatmsg_instantly(phone_no,message,tab_close=True)
        except:
            return {'result':'Failure'}, 503
        return {'result':'Success'}, 200
    return {"error": "Request must be JSON"}, 415
    
    
@app.post("/whatsappsms")

def whatsappsms():
    if request.is_json:
        whatsappmsg = request.get_json()
        phone_no=whatsappmsg["to"]
        message=whatsappmsg["message"]
        time_hour=whatsappmsg["hour"]
        time_min=whatsappmsg["min"]
        try:
            wa.sendwhatmsg(phone_no,message,time_hour,time_min,tab_close=True)
        except:
            return {'result':'Failure'}, 503
        return {'result':'Success'}, 200
    return {"error": "Request must be JSON"}, 415



@app.post("/whatsappgroupsmsinstant")

def whatsappgroupsmsinstant():
    if request.is_json:
        whatsappmsg = request.get_json()
        group_id=whatsappmsg["to"]
        message=whatsappmsg["message"]
        try:
            wa.sendwhatmsg_to_group_instantly(group_id,message,tab_close=True)
        except:
            return {'result':'Failure'}, 503
        return {'result':'Success'}, 200
    return {"error": "Request must be JSON"}, 415


@app.post("/whatsappgroupsms")

def whatsappgroupsms():
    if request.is_json:
        whatsappmsg = request.get_json()
        group_id=whatsappmsg["to"]
        message=whatsappmsg["message"]
        time_hour=whatsappmsg["hour"]
        time_min=whatsappmsg["min"]
        try:
            wa.sendwhatmsg_to_group(group_id,message,time_hour,time_min,tab_close=True)
        except:
            return {'result':'Failure'}, 503
        return {'result':'Success'}, 200
    return {"error": "Request must be JSON"}, 415    
    
if __name__ == '__main__':
    #app.run(host="localhost", port=8000, debug=True)
    from waitress import serve
    serve(app, host="0.0.0.0", port=8000)
