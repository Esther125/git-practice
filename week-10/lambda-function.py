
import json
import requests
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    webhook_url = 'https://discord.com/api/webhooks/1312503349920141372/U9U5cT_qs-3QOooxih6uWQmT3OJY1TrmLjTG81zhZZAWWRgFL6z2Kxs53t7iRm-rQ0XE'
    try:
        sns_message = json.loads(event['Records'][0]['Sns']['Message'])
        content = f"Alarm Name: {sns_message['AlarmName']}\nNew State: {sns_message['NewStateValue']}\nReason: {sns_message['NewStateReason']}"
        data = {"content": content}
        response = requests.post(webhook_url, json=data)
        logger.info('Message sent to Discord successfully')
        logger.info(response.text)
    except Exception as e:
        logger.error(f"Error sending message to Discord: {str(e)}")

    return {
        'statusCode': 200,
        'body': json.dumps('Check logs for details')
    }

