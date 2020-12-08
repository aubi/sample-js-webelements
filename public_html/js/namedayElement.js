import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element/lit-element.js?module';

// commented code is TypeScript
//            @customElement('nameday-element')
class NamedayElement extends LitElement {
//                @property() 
//    nameDay = 'loading...'; 

    constructor() {
        super();
        this.nameDay = 'loading...'; 
    }

    static get properties() {
        return {
            date: {type: String },
            dateDesc: {type: String },
            nameDay: {type: String}
        };
    }

    static get styles() {
        return css`.emph { color: green; }`;
    }

    connectedCallback() {
        super.connectedCallback();
        console.log("connectedCallback");
        this.getModel().then(res => {
            // what I get from the rest
            console.log(res);
            this.nameDay = res[0].name;
        });
    }

    async getModel() {
        var url = "https://svatky.adresa.info/json";
        if(this.date == null) {
            this.dateDesc = "Today";
        } else {
            this.dateDesc = parseInt(this.date.substring(0,2)) + ". "+parseInt(this.date.substring(2,4))+".";
            url = url + "?date="+this.date;
        }
        var response = await fetch(url);
        return response.json();
    }

    render() {
        return html`${this.dateDesc} is the nameday for <span class="emph">${this.nameDay}</span>`;
    }
}

customElements.define('nameday-element', NamedayElement);
