class App{
    constructor(){
        this.OurRules=[]
        this.ourRulesListFiller()
        this.AllRules=[]
        this.list=document.querySelector('#rulesList')
        this.rulesButton= document.querySelector('#ourRules')
        this.rulesButton.addEventListener('click', (ev)=>{
            ev.preventDefault()
            this.ourRulesArray()

        })
    }

    ourRulesListFiller(){
        this.OurRules.push(this.newRule('Open/Closed Parenthesis','Whenever a nonnumber card is played, it becomes illegal to play any number cards until another one is played." whenever they play a `3`.'))
        this.OurRules.push(this.newRule('Mario','Player must exclaim "MARIO!" whenever they play a `3`.'))
        this.OurRules.push(this.newRule('Luigi','Player must exclaim "Luigi!" whenever they play a `4`.'))
        this.OurRules.push(this.newRule('Bowser','Player must yell "Buah-Hah-hah!" whenever they play a `2` after a `4` or `3` was just played.'))
        this.OurRules.push(this.newRule('wow','Player must say "wow" whenever the exact same card.'))
        this.OurRules.push(this.newRule('Hello','Player must say "hello" whenever a card of the next highest rank is played.'))
        this.OurRules.push(this.newRule('Tap of the Ace','Player must tap their head whenever they play an Ace.'))
        this.OurRules.push(this.newRule('"Sorry, Bud"','If three players in a row can\'t play a card and must draw a card from the draw pile, the second player must tell the third player "Sorry Bud" and then the counter resets.'))
        this.OurRules.push(this.newRule('knock, knock','If a player plays on top of a card of the same rank they must \'knock\'  the table.'))
        this.OurRules.push(this.newRule('Thanking Satan','If a player plays the third `6` in a row they must proclaim "Thank You Satan". The number of `6` for the purposes of this rule resets after it triggers. '))
        this.OurRules.push(this.newRule('Waluigi','Player must exclaim "WaLuigi!" whenever they play a `5`.'))
        this.OurRules.push(this.newRule('i++','Player must say \'i++\' when a card of the next highest rank is played'))
        this.OurRules.push(this.newRule('Reverse Reverse','If a player plays a `4` on top of a `4` the "original rule" happens twice and is effectively nullified.'))
        this.OurRules.push(this.newRule('Meow','A player must \'meow\' whenever the second `6` is played.'))
        this.OurRules.push(this.newRule('Woof','A player must \'woof\' whenever a `3` is played.'))
        this.OurRules.push(this.newRule('Yee Haw',' Whenever a player plays a card that change the color (♠/♣ => ♥/♦ or ♥/♦ => ♠/♣) they must say "Yee Haw"'))
        this.OurRules.push(this.newRule('Giddy Up','Whenever a player plays a `K` , `Q` , or `J` on another one of those three they must say "Giddy Up"'))
        this.OurRules.push(this.newRule('Slap Jack',' Whenever a player plays a `J` they must slap the pile of played cards.'))
        this.OurRules.push(this.newRule('Naughty, Naughty','At any time a player may play any `9` on top of a `6` if they say "Naughty Naughty"'))
        this.OurRules.push(this.newRule('Raise \'Em','If a player plays a `5` then each player must raise their hand, the last player to raise their hand as determined by the `5` playing player must draw a card'))
        this.OurRules.push(this.newRule('Thank you','Anytime a player recieves a penalty they must say "thank you"'))
        this.OurRules.push(this.newRule('Sandwiches!','If a player creates a sandwhich on the stack they must slap the table.'))
        this.OurRules.push(this.newRule('Scream','If a player plays a `9` or a `10` they must scream'))

    }

    ourRulesArray(){
        for(let i=0; i<this.OurRules.length; i++)
        {
        this.AllRules.push(this.OurRules[i])
        const item=this.renderItem(this.OurRules[i])
        this.list.appendChild(item)    

        }
    }

    newRule(title,rulesText){

        const rule= {
            title: title,
            rule: rulesText,
        }
        
        return rule
    }
    renderItem(rule) {
        const item = document.createElement('li')
        item.classList.add('rule')
        const div=document.createElement('div')
        // get the list of properties
        const properties = Object.keys(rule)
      
        // loop over the properties
        properties.forEach((propertyName) => {
          // build a span, and append it to the list
          const span = this.renderProperty(propertyName, rule[propertyName])
          div.appendChild(span)
        })

        item.appendChild(div)
      
        item.appendChild(this.deleteButtonGenerator(rule,item))
                  
        return item
      }
        
        renderProperty(name, value) {
            const span = document.createElement('span')
            
            span.classList.add(name)
            span.textContent = value
       
            if(name==='title'){
             
                const br=document.createElement('br')
                span.appendChild(br)
            }
        
            return span
          }

          deleteButtonGenerator(rule, item){
            const button=document.createElement('button')
            button.classList.add('delete')
            button.innerHTML='<i class="far fa-trash-alt"></i>' 
                  button.addEventListener('click', (ev)=>{
                    this.removeRule(rule, item)
                })
            return button
          }

          removeRule(rule, item) {
            // remove from the UI
            this.list.removeChild(item)
          
            // remove from the array
            const i = this.AllRules.indexOf(rule)
            this.AllRules.splice(i, 1)
    
          }

    ourRulesListRender(){
        for(let i=0; i<this.OurRules.length; i++){
            const item = document.createElement('li')
            item.classList.add('rule')

            const span=document.createElement('div')
            const thisRule=this.OurRules[i]
            const TitleHead = document.createElement('h3')
            TitleHead.classList.add('ruleTitle')
            TitleHead.textContent=thisRule['title']
            span.appendChild(TitleHead)

            const desc = document.createElement('p')
            desc.classList.add('ruleDesc')
            desc.textContent=thisRule['rule']
            span.appendChild(desc)
            item.appendChild(span)
            this.list.appendChild(item)

        }


}

   



}


const app = new App()

/*
♠	
♥	
♣	
♦	Black Diamond	&#9830;
♤	White Spade	&#9828;
♡	White Heart	&#9825;
♧	White Club	&#9831;
♢	White Diamond	&#9826;

hearts 🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾
spades 🂡 🂢 🂣 🂤 🂥 🂦 🂧 🂨 🂩 🂪 🂫 🂬 🂭 🂮
diamonds 🃁 🃂 🃃 🃄 🃅 🃆 🃇 🃈 🃉 🃊 🃋 🃌 🃍 🃎
clubs 🃑 🃒 🃓 🃔 🃕 🃖 🃗 🃘 🃙 🃚 🃛 🃜 🃝 🃞
*/

