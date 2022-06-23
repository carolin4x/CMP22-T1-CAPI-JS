const container = document.getElementById('demo')

async function getCards() {
    try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
       // console.log(response)
        const cards = await response.json()
        // console.log(cards.data);
        const oursCards = cards.data.slice(77, 81)
        // console.log(oursCards);
        oursCards.map((card) => {
            const section = document.createElement('div')
            section.setAttribute('class', 'card')

            const title = document.createElement('h1')
            title.setAttribute('class', 'title')
            title.innerText = card.name

            const type = document.createElement('p')
            type.setAttribute('class', 'type')
            type.innerText = card.type

            const description = document.createElement('p')
            description.setAttribute('class', 'description')
            description.innerText = card.desc //aqui ta desc pq é como está vindo do nosso JSON

            const image = document.createElement('img')
            image.setAttribute('class', 'image')
            image.setAttribute('src', card.card_images[0].image_url)

            container.appendChild(section)
            section.appendChild(image)
            section.appendChild(title)
            section.appendChild(type)
            section.appendChild(description)

        })

    }
    catch (err) {
        console.log("HTTP ERROR: ", err)
    }
}

getCards()
