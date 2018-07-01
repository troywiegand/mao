class App{
    constructor(){
        this.OurRules=[]
        this.ourRulesListFiller()
        console.log(this.OurRules)
        this.rulesButton= document.querySelector('#ourRules')
        this.rulesButton.addEventListener('click', (eve)=>{
            ev.preventDefault()
            this.ourRulesListRender()

        })
    }

    ourRulesListFiller(){
        this.OurRules.push(this.newRule('Mario','Player must exclaim "MARIO!" whenever they play a `3`.'))

    }

    newRule(title,rulesText){

        const rule= {
            title: title,
            rule: rulesText,
        }
        
        return rule

    }

    ourRulesListRender(){

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

