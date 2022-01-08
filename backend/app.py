# -*- coding: utf-8 -*-
"""
Created on Fri Jan  7 03:19:09 2022

@author: young
"""

from flask import Flask
from flask_cors import CORS
from .flowchartA import A_S_1

app = Flask(__name__)
CORS(app)


@app.route('/api/start')
def start():
    # return {"msg": [
    #     "「祝你生日快樂，祝你生日快樂……。」",
    #     "蠟燭點亮了，今天是你的65歲生日。",
    #     "按照世界衛生組織（WHO）的定義，從今天開始，你就正式成為「高齡人口」的一份子了。",
    #     "65歲，是人生臻於純熟圓滿的階段。",
    #     "不過，隨著退休、身體健康下滑、子女成年離家，你的生活環境與人際關係，也將迎來重大的改變與挑戰……。",
    #     "你對著蛋糕上搖曳的燭光，許下了邁入65歲後的第一個心願：請讓我能有尊嚴的活到最後。"
    # ]}
    A_S_1.current = A_S_1
    msg = A_S_1.current.getScript()
    right = msg.pop()
    left = msg.pop()
    return {"msg": msg,
            "left": left,
            "right": right}


@app.route('/api/next/<choice>', methods=['POST'])
def nextBox(choice):
    # choice = request.args.get("choice", "world")
    # if choice == 'Left':
    #     print(f'hello, {choice}!')
    #     return {"msg": ['You clicked Left!', 'You clicked Left!']}
    # elif choice == 'Right':
    #     print(f'hello, {choice}!')
    #     return {"msg": ['You clicked Right!', 'You clicked Right!', 'You clicked Right!']}
    # else:
    #     print(f'hello, {choice}!')
    #     return {"msg": 'Error'}
    if choice == 'Left':
        print(f'hello, {choice}!')
        A_S_1.current = A_S_1.current.left
        msg = A_S_1.current.getScript()
        
        if A_S_1.current.left != None or A_S_1.current.right != None:
            right = msg.pop()
            left = msg.pop()
            return {"msg": msg,
                    "left": left,
                    "right": right}
        else:
            return {"msg":msg}
    elif choice == 'Right':
        print(f'hello, {choice}!')
        A_S_1.current = A_S_1.current.right
        msg = A_S_1.current.getScript()
        
        if A_S_1.current.left != None or A_S_1.current.right != None:
            right = msg.pop()
            left = msg.pop()
            return {"msg": msg,
                    "left": left,
                    "right": right}
        else:
            return {"msg":msg}
    else:
        print(f'hello, {choice}!')
        return {"msg": ['Error']}


# if __name__=="__main__":
#     app.run()
