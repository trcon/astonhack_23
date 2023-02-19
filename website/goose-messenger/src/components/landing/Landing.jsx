import React, { useState, useEffect } from "react";
import {GiGoose} from 'react-icons/gi';
import {BiSend} from 'react-icons/bi';
import Quote from "./Quote";


import "./landing.css"


const Landing = () => {

    const values = [
        {
          "id": 1,
          "text": "Geese are waterfowl belonging to the family Anatidae, which also includes ducks and swans."
        },
        {
          "id": 2,
          "text": "There are around 20 species of geese, which are found in both the Old World and the New World."
        },
        {
          "id": 3,
          "text": "Geese are herbivores, and their diet consists mainly of grasses, leaves, and grains."
        },
        {
          "id": 4,
          "text": "Geese have a complex digestive system that allows them to extract nutrients from tough plant material."
        },
        {
          "id": 5,
          "text": "Geese are strong swimmers and can dive to depths of up to 30 feet."
        },
        {
          "id": 6,
          "text": "Geese have a special gland near their tail that secretes oil, which they spread over their feathers to make them waterproof."
        },
        {
          "id": 7,
          "text": "Geese are highly social birds and are known for their honking calls, which they use to communicate with each other."
        },
        {
          "id": 8,
          "text": "Geese mate for life and form strong bonds with their partners."
        },
        {
          "id": 9,
          "text": "During migration, geese can fly at speeds of up to 50 miles per hour."
        },
        {
          "id": 10,
          "text": "Geese fly in a distinctive V-shaped formation during migration, which helps them conserve energy."
        },
        {
          "id": 11,
          "text": "Geese can fly at altitudes of up to 29,000 feet during migration."
        },
        {
          "id": 12,
          "text": "Geese have been domesticated for thousands of years, and have been used for food, feathers, and even as guards."
        },
        {
          "id": 13,
          "text": "Geese have been used in the sport of falconry, where they are used as bait to lure birds of prey."
        },
        {
          "id": 14,
          "text": "Geese have been bred for their meat, eggs, and feathers, and are a popular food source in many cultures."
        },
        {
          "id": 15,
          "text": "Geese are sometimes used as bioindicators, as their presence or absence can indicate changes in the health of wetland ecosystems."
        },
        {
          "id": 16,
          "text": "Geese are sometimes considered a nuisance due to their droppings, which can damage lawns and sidewalks and carry disease."
        },
        {
          "id": 17,
          "text": "Geese have been used in art for centuries, with depictions of geese appearing in everything from ancient Egyptian hieroglyphs to modern paintings and sculptures."
        },
        {
          "id": 18,
          "text": "The Canada goose has a distinctive honk, which is used to communicate with other geese and can be heard from over a mile away."
        },
        {
          "id": 19,
          "text": "Geese are sometimes used in science experiments, as they are easy to train and can be used to study topics such as animal behavior and cognition."
        },
        {
          "id": 20,
          "text": "Geese are found on every continent except for Antarctica."
        },
        {
          "id": 21,
          "text": "The lightest species of goose is the lesser white-fronted goose, which weighs around 1.6 kg (3.5 lbs)."
        },
        {
          "id": 22,
          "text": "The heaviest species of goose is the emperor goose, which can weigh up to 7 kg (15 lbs)."
        },
        {
          "id": 23,
          "text": "Geese have excellent eyesight, which allows them to spot predators from a distance."
        },
        {
          "id": 24,
          "text": "Geese are monogamous, which means they mate with only one partner for life."
        },
        {
          "id": 25,
          "text": "Geese are protective parents and will aggressively defend their young from predators."
        },
        {
          "id": 26,
          "text": "Geese can live for up to 25 years in the wild."
        },
        {
          "id": 27,
          "text": "Geese have a complex social hierarchy, with dominant birds taking priority in mating and feeding."
        },
        {
          "id": 28,
          "text": "Geese are migratory birds, and many species travel thousands of miles each year to breed and feed."
        },
        {
          "id": 29,
          "text": "Geese can fly for hours without stopping, thanks to their efficient respiratory system and powerful wing muscles."
        },
        {
          "id": 30,
          "text": "Geese are known for their aggressive behavior, particularly during mating season and when defending their young."
        },
        {
          "id": 31,
          "text": "Geese have a complex vocal repertoire, with different calls used for different purposes such as warning of danger or calling to their mate."
        },
        {
          "id": 32,
          "text": "Geese have been known to form lifelong bonds not just with their mate, but also with their siblings and parents."
        },
        {
          "id": 33,
          "text": "Geese are highly adaptable birds and can thrive in a variety of environments, from urban parks to remote wetlands."
        },
        {
          "id": 34,
          "text": "Geese have been used in folklore and mythology for centuries, with many cultures associating them with loyalty, protection, and migration."
        },
        {
          "id": 35,
          "text": "Geese are often depicted in children's stories and cartoons, such as the character of Mother Goose in nursery rhymes."
        },
        {
          "id": 36,
          "text": "Geese are sometimes used in weed control, as they can graze on invasive plant species that are harmful to wetland ecosystems."
        },
        {
          "id": 37,
          "text": "Geese have a highly developed sense of hearing, which allows them to communicate effectively with each other and detect potential threats."
        },
        {
          "id": 38,
          "text": "Geese have been the subject of scientific research for decades, with studies focusing on their behavior, ecology, and physiology."
        },
        {
          "id": 39,
          "text": "Geese have been used in some cultures as guard animals, as they are known to be highly territorial and protective of their flock."
        },
        {
          "id": 40,
          "text": "Geese are omnivorous, feeding on a variety of plants and insects as well as small animals like fish and rodents."
        },
        {
          "id": 41,
          "text": "Geese have a unique digestive system that allows them to extract nutrients from tough plant material like grass and leaves."
        },
        {
          "id": 42,
          "text": "Geese can drink both fresh and saltwater, and can even filter out salt from seawater to hydrate themselves."
        },
        {
          "id": 43,
          "text": "Geese have been used as a source of food and feathers for thousands of years, and are still consumed in many parts of the world today."
        },
        {
          "id": 44,
          "text": "Geese have been known to help humans in various ways, such as providing down feathers for insulation and helping to control insect populations."
        },
        {
          "id": 45,
          "text": "Geese have been domesticated for thousands of years, and are now raised for meat, eggs, and feathers in many countries around the world."
        },
        {
          "id": 46,
          "text": "Geese have been used in aviation research, with scientists studying their flight patterns and aerodynamics to improve airplane design."
        },
        {
          "id": 47,
          "text": "Geese have a unique ability to fly in a V-formation, which reduces air resistance and allows them to fly longer distances with less energy."
        },
        {
          "id": 48,
          "text": "Geese are sometimes used in therapy programs for people with disabilities or mental health issues, as they are calming and can help improve social skills."
        },
        {
          "id": 49,
          "text": "Geese have been the subject of numerous works of art, including paintings, sculptures, and literature."
        },
        {
          "id": 50,
          "text": "Geese have been used in military operations, with some armies training geese to detect intruders and alert their handlers."
        }
      ]
    const user = {id: 1, username:"harry"}
    const outputString = ["honk", "quack"]
    const [selectedChatroom, setSelectedChatroom] = useState(null)

    const [position, setPosition] = useState({word:0, char:0})
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([{id:1, message:"hello"}, {id:2, message:"whatsUp"}])
    const [chatrooms, setChatrooms] = useState([{id:1, sender:"harry", recipient:"Mum"}])
    const [chatroomTable, setChatroomTable] = useState(null)
    const [messageTable, setMessageTable] = useState(null)

    //on first render
    useEffect(() => {
        setMessages(
            [{id:1, message:"hello", sender:"harry"},
            {id:2, message:"whatsUp", sender:"other"}
            , {id:3, message:"how are you", sender:"harry"}
            , {id:4, message:"good", sender:"other"}
            , {id:5, message:"hbu", sender:"other"}
            , {id:6, message:"fantastic mate I'm over the moon", sender:"harry"}]
        )

        setChatrooms(
            [{id:1, sender:"harry", recipient:"Mum"},
            {id:1, sender:"harry", recipient:"Father"},
            {id:1, sender:"Bob", recipient:"harry"},
            {id:1, sender:"harry", recipient:"Max"},
            {id:1, sender:"harry", recipient:"Khadra"},
            {id:1, sender:"harry", recipient:"Neil"},]
        )


    }, [])

    useEffect(() => {
        setMessageTable(
            messages.map((item) => (
                <div className={identifyMessage(item.sender)}>{item.message}</div>
            ))
        )
    }, [messages])

    useEffect(() => {
        setChatroomTable(
            chatrooms.map((item) => (
                    <div className="recipient" style={identifyRecipient(item)} onClick={() => setSelectedChatroom(item)}><h3>{identifyChatroom(item)}</h3></div>
            ))
        )
        console.log("yo")
    }, [chatrooms, selectedChatroom])

    const identifyRecipient = (chatroom) => {
        if (chatroom == selectedChatroom || chatroom == selectedChatroom) {
            return {background: "#c33e00"}
        }
        return {"font-family": "inherit"}
    }

    const identifyMessage = (username) => {
        console.log("sender")
        if (username == user.username) {
            return "message sender"
        } else {
            console.log("reciever")
            return "message reciever"
        }
    }

    const identifyChatroom = (chatroom) => {
        console.log("sender")
        if (chatroom.sender == user.username) {
            return chatroom.recipient
        } else {
            return chatroom.sender
        }
    }

    const outputGoose = (e) => {
        if (e.keyCode <= 90 && e.keyCode >= 65 && message.length < 100) {
            setMessage(message+outputString[getRandomInt(0, outputString.length)])
            position.char += 1
            console.log(Math.random(message.length))

        } else if (e.keyCode == 13) {
            setMessages( messages => [...messages, {id:6, message:message, sender:"harry"}])
            setMessages( messages => [...messages, {id:6, message:values[getRandomInt(0,50)].text, sender:"other"}])
            setMessage("")
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    return(
        <div id="landing">
            {/* <Quote id="quote"/> */}
            <nav></nav>
            <div className="landing__main">
                <div className="messages">
                {/* <h2>Messages</h2> */}
                    {chatroomTable}
                </div>
                <div className="inbox">
                    <div className="chatroom">
                        {messageTable}
                    </div>
                    <div className="message__sender">
                        <input className="sendInput" type={"text"} onKeyDown={(e) => outputGoose(e)} value={message}></input>
                        <BiSend />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing