"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require();
jquery;
;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var CARDS = [
    {
        'name': 'start',
        'theysay': "Administrator Buz mutters to himself while sorting through a pile of papers, mostly requests for repairs and capital allocations. The first three are:\n- To fix a wall in Myrtle's Tavern\n- Repairing the Noord Plateaus footbridge\n- A rather lengthy attempt to justify why the guard barracks needs a second poogaloo.",
        'playanim': 'marv_chat1',
        'responses': [
            {
                'txt': "Buz examines the wall form.",
                'action': 'shownode',
                'param': 'xwall',
                'settrue': 'xwall',
                'iffalse': ['xwall']
            },
            {
                'txt': "Buz examines the bridge form.",
                'action': 'shownode',
                'param': 'xbridge',
                'settrue': 'xbridge',
                'iffalse': []
            },
            {
                'txt': "Buz examines the poogaloo form.",
                'action': 'shownode',
                'param': 'xpoogaloo',
                'settrue': 'xpoogaloo',
                'iffalse': []
            }
        ]
    },
    // card
    {
        'name': 'xwall',
        'theysay': "This one is written in careful and deliberate handwriting, as if written by someone accustomed to business admin. Myrtle filed this one a while ago, and it requires a single brick to be replaced. However, the local masonry guild do not take orders for anything less than 10 bricks. So far, he has just been moving the request to the bottom of the pile, hoping the size of the job gets bigger by the time the paper reaches the top again.",
        'playanim': 'marv_chat1',
        'responses': [
            {
                'txt': "Buz wonders if Myrtle would be averse to a cannon-related 'accident' to scale the repair work to an appropriate size.",
                'action': 'shownode',
                'param': 'cannon',
                'settrue': 'cannon',
                'iffalse': []
            }
        ]
    },
    // card
    {
        'name': 'cannon',
        'theysay': "\"Sherbard!!!\", he yells. \n\nMoments later a young man, barely old enough to drink, emerges from the room next door. \n\n\"Yassir?\", he says, ready to receive his instructions. \n\nBuz scrawls the message onto a small leaf of paper, neatly folds it once and hands it to the eager assistant. \"Take this to Myrtle at the Inn. I will need a response.\"",
        'playanim': 'marv_chat1',
        'responses': [
            {
                'txt': "Sherbard takes the note.",
                'action': 'shownode',
                'param': 'notemyrtle',
                'settrue': '',
                'iffalse': []
            }
        ]
    },
    {
        'name': 'notemyrtle',
        'theysay': "\"Yassir!\", Sherbard says, takes three steps to the doorway, then burst into a sprint. \n\nA short while later he's back with another note. \n\nBuz reads it: \"I regret to inform you that my business would not survive the downtime that might cause. Never mind, I have devised an alternative solution involving some bread dough and a few cups of demon-bee honey. Regards, Myrtle Mopmead.\" \n\nBuz is quietly relieved. Last time he had to stage an 'accident', it resulted in a real accident that required a lot more paperwork.",
        'playanim': 'marv_chat1',
        'responses': [
            {
                'txt': "Buz files the wall request away.",
                'action': 'shownode',
                'param': 'start',
                'settrue': '',
                'iffalse': []
            }
        ]
    }
];
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var Card = (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
var Response = (function () {
    function Response() {
    }
    return Response;
}());
exports.Response = Response;
var JQDraggable = (function () {
    function JQDraggable(el) {
        this.el = el;
    }
    JQDraggable.prototype.ngOnInit = function () {
        $(this.el.nativeElement).hide();
    };
    return JQDraggable;
}());
JQDraggable = __decorate([
    core_1.Directive({
        selector: "[jq-draggable]"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], JQDraggable);
exports.JQDraggable = JQDraggable;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.cards = CARDS;
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        directives: [JQDraggable],
        template: "\n    <div *ngFor=\"let card of cards\" class=\"card\">\n      <div><label>Name: </label> <input [(ngModel)]=\"card.name\" placeholder=\"\"></div>\n      <div jq-draggable><label>Text: </label> <textarea [(ngModel)]=\"card.theysay\" placeholder=\"\"></textarea></div>\n      <div><label>name: </label> <input [(ngModel)]=\"card.name\" placeholder=\"\"></div>\n      <div class=\"responses\">\n\t   \t<div *ngFor=\"let response of card.responses\" class=\"response\">\n\t   \t\t<div><label>Text: </label> <input [(ngModel)]=\"response.txt\" placeholder=\"\"></div>\n\t   \t\t<div><label>Action: </label> <input [(ngModel)]=\"response.action\" placeholder=\"\"></div>\n\t   \t\t<div><label>Param: </label> <input [(ngModel)]=\"response.param\" placeholder=\"\"></div>\n\t   \t\t<div><label>SetTrue: </label> <input [(ngModel)]=\"response.settrue\" placeholder=\"\"></div>\n      \t</div>\n      </div>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map