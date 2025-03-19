import webbrowser as web
import time
import pyautogui as pg
from datetime import datetime
from urllib.parse import quote
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from core import core, exceptions, log ##--> will modify

def sendwhatmsg_instantly(
    phone_no: str,
    message: str,
    wait_time: int = 20,
    tab_close: bool = False,
    close_time: int = 3,
) -> None:
    """Send WhatsApp Message Instantly"""

    if not core.check_number(number=phone_no):
        raise exceptions.CountryCodeException("Country Code Missing in Phone Number!")

    web.open(f"https://web.whatsapp.com/send?phone={phone_no}&text={quote(message)}")
    time.sleep(wait_time/2)
    pg.click(core.WIDTH / 2, core.HEIGHT / 2)
    time.sleep(wait_time/4)
    pg.press("enter")
    time.sleep(wait_time/10)
    log.log_message(_time=time.localtime(), receiver=phone_no, message=message)
    if tab_close:
        core.close_tab(wait_time=close_time)



def sendwhatmsg(
    phone_no: str,
    message: str,
    time_hour: int,
    time_min: int,
    wait_time: int = 20,
    tab_close: bool = False,
    close_time: int = 3,
) -> None:
    """Send a WhatsApp Message at a Certain Time"""

    if not core.check_number(number=phone_no):
        raise exceptions.CountryCodeException("Country Code Missing in Phone Number!")

    if time_hour not in range(25) or time_min not in range(60):
        raise Warning("Invalid Time Format!")

    current_time = time.localtime()
    left_time = datetime.strptime(
        f"{time_hour}:{time_min}:0", "%H:%M:%S"
    ) - datetime.strptime(
        f"{current_time.tm_hour}:{current_time.tm_min}:{current_time.tm_sec}",
        "%H:%M:%S",
    )

    if left_time.seconds < wait_time:
        raise exceptions.CallTimeException(
            "Call Time must be Greater than Wait Time as WhatsApp Web takes some Time to Load!"
        )

    sleep_time = left_time.seconds - wait_time
    print(
        f"In {sleep_time} Seconds WhatsApp will open and after {wait_time} Seconds Message will be Delivered!"
    )
    time.sleep(sleep_time)
    sendwhatmsg_instantly(message=message, phone_no=phone_no, wait_time=wait_time,tab_close=tab_close,close_time=close_time)
    log.log_message(_time=current_time, receiver=phone_no, message=message)
    
    
def sendwhatmsg_to_group_instantly(
    group_id: str,
    message: str,
    wait_time: int = 40,
    tab_close: bool = False,
    close_time: int = 3,
) -> None:
    """Send WhatsApp Message to a Group Instantly"""
    options = webdriver.ChromeOptions()
    options.add_argument('--user-data-dir=C:\\Users\\joyde\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1')
    options.add_argument('--profile-directory= Profile 1')
    chrome_driver=webdriver.Chrome(executable_path='D:\Py_Scripts\whatsapp_bot\chromedriver.exe',options=options)
    chrome_driver.get("https://web.whatsapp.com")
    time.sleep(wait_time*0.75)
    user = chrome_driver.find_element_by_xpath('//span[@title="{}"]'.format(group_id))
    user.click()
    time.sleep(wait_time/8)
    width,height=pg.size()
    pg.click(width/2,height/2)
    time.sleep(wait_time/20)
    pg.write(message)
    time.sleep(wait_time/20)
    pg.press("enter")
    log.log_message(_time=time.localtime(), receiver=group_id, message=message)
    if tab_close:
        core.close_tab(wait_time=close_time)    
    
    
def sendwhatmsg_to_group(
    group_id: str,
    message: str,
    time_hour: int,
    time_min: int,
    wait_time: int = 40,
    tab_close: bool = False,
    close_time: int = 3,
) -> None:
    """Send WhatsApp Message to a Group at a Certain Time"""

    if time_hour not in range(25) or time_min not in range(60):
        raise Warning("Invalid Time Format!")

    current_time = time.localtime()
    left_time = datetime.strptime(
        f"{time_hour}:{time_min}:0", "%H:%M:%S"
    ) - datetime.strptime(
        f"{current_time.tm_hour}:{current_time.tm_min}:{current_time.tm_sec}",
        "%H:%M:%S",
    )

    if left_time.seconds < wait_time:
        raise exceptions.CallTimeException(
            "Call Time must be Greater than Wait Time as WhatsApp Web takes some Time to Load!"
        )

    sleep_time = left_time.seconds - wait_time
    print(
        f"In {sleep_time} Seconds WhatsApp will open and after {wait_time} Seconds Message will be Delivered!"
    )
    time.sleep(sleep_time)
    sendwhatmsg_to_group_instantly(message=message, group_id=group_id, wait_time=wait_time,tab_close=tab_close)
    log.log_message(_time=current_time, receiver=group_id, message=message)
