import{Q as S}from"./QPage.850a15ba.js";import{d as W,v as O,J as R,D as v,o as H,c as L,w as Y,L as N,u as C}from"./index.01d7074a.js";import"./render.0f74db1f.js";const n={title_page:/^\s*((?:title|credit|authors?|source|notes|draft ?date|date|contact|copyright|revisions?)\:)(?=[^\S\n]*(?:\n(?: {3,}|\t))?\S.*)/i,scene_heading:/^\s*((?:\*{0,3}_?)?(?:(?:int|i)\.?\/(?:ext|e)|int|ext|est)[. ].+$)|^\s*\.(?!\.+)(\S.*)$/i,scene_number:/\s*#([\w.-]+?)#\s*$/,transition:/^\s*((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)[^\S\n]*$|^\s*> *(.+)$/,dialogue:new RegExp("(?!^\\s*\\\\@|^\\s*[!.>~=#])(?!^\\s*[0-9 _*]+(?:\\(.*\\))?[*_]*(?:\\^?)?\\s*\\n)(^\\s*(?:@[^^()\\n]+|[^^()\\na-z]+(?<!(?:BLACK|OUT)\\.|TO:\\s*))(?:\\(.*\\))?[ *_]*)(\\^?)?\\s*\\n(?!\\n+)([\\s\\S]+)"),parenthetical:/^ *(?:(?<u1>_{0,1})(?<s1>\*{0,3})(?=.+\k<s1>\k<u1>)|(?<s2>\*{0,3})(?<u2>_{0,1})(?=.+\k<u2>\k<s2>))(\(.+?\))(\k<s1>\k<u1>|\k<u2>\k<s2>) *$/,action:/^(.+)/g,centered:/^\s*>.+<[^\S\r\n]*(?:\s*>.+<[^\S\r\n]*)*$/,lyrics:/^\s*~(?! ).+(?:\n\s*~(?! ).+)*$/,section:/^\s*(#+) *(.*)$/,synopsis:/^\s*=(?!=+) *(.*)$/,note:/^\[{2}(?!\[+)(.+)]{2}(?!\[+)$/,note_inline:/\[{2}(?!\[+)([\s\S]+?)]{2}(?!\[+)/g,boneyard:/\/\*[\S\s]*?\*\//g,page_break:/^={3,}$/,line_break:/^ {2}$/,bold_italic_underline:new RegExp("(?<!\\\\)(?:(?=\\w)(?<![^\\W_]_*)_\\*{3}(?=.+?(?<=\\S)(?<!\\*)\\*{3}_(?!\\*))|\\*{3}_(?=.+?(?<=\\S)(?<!_)_\\*{3}(?!_)))(?=\\S)(.+?(?<=\\S))(?<!\\\\)(?:(?<!\\*)\\*{3}_(?!\\*)|(?<!_)_\\*{3}(?!_))","g"),bold_underline:new RegExp("(?<!\\\\)(?:(?=\\w)(?<![^\\W_]_*)_\\*{2}(?=.+?(?<=\\S)(?<!\\*)\\*{2}_(?!\\*))|\\*{2}_(?=.+?(?<=\\S)(?<!_)_\\*{2}(?!_)))(?=\\S)(.+?(?<=\\S))(?<!\\\\)(?:(?<!\\*)\\*{2}_(?!\\*)|(?<!_)_\\*{2}(?!_))","g"),italic_underline:new RegExp("(?<!\\\\)(?:(?=\\w)(?<![^\\W_]_*)_\\*(?=.+?(?<=\\S)(?<!\\*)\\*_(?!\\*))|\\*_(?=.+?(?<=\\S)(?<!_)_\\*(?!_)))(?=\\S)(.+?(?<=\\S))(?<!\\\\)(?:(?<!\\*)\\*_(?!\\*)|(?<!_)_\\*(?!_))","g"),bold_italic:new RegExp("(?<!\\\\)\\*{3}(?!\\*)(?=\\S)(.+?(?<=[^\\s*]))(?<!\\\\)\\*{3}","g"),bold:new RegExp("(?<!\\\\)\\*{2}(?!\\*)(?=\\S)(.+?(?<=[^\\s*]))(?<!\\\\)\\*{2}","g"),italic:new RegExp("(?<!\\\\)\\*(?!\\*)(?=\\S)(.+?(?<=[^\\s*]))(?<!\\\\)\\*","g"),underline:new RegExp("(?=\\w)(?<![^\\W_]_*)(?<!\\\\)_(?!_)(?<![^_])(?=\\S)(?!<[^>]*>)(.+?(?<=\\S)(?=_(?<=\\w)(?![^\\W_])))(?<!\\\\)(?<!<[^>]*>)_","g"),escape:/\\([@#!*_$~`+=.><\\\/])/g,blank_lines:/\n(?:(?! {2}\n)(?:[^\S\n]*| {3,}[^\S\n]*)(?:\n|$))+|^[^\S\n]*(?:\n|$)/g};function B(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function P(i){return i.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')}class y{constructor(e){this.tokens=[];const t=new RegExp("^\\s*(?:[\\w ]+(?<!\\\\)\\:[^\\S\\n]*(?:(?:\\n(?: {3}|\\t))?[^\\S\\n]*\\S.*)+(?:\\n|$))+"),s=new RegExp("^\\s*[\\w ]+(?<!\\\\)\\:[^\\S\\n]*(?:(?:\\n(?![\\w ]+\\:)(?: {3}|\\t))?[^\\S\\n]*\\S.*)+(?:\\n|$)");let o=0;const a=e.match(t);if(a){let h=a[0];for(this.scanIndex=h.length;o<this.scanIndex;){const r=h.match(s);if(r)this.tokens=new G(r[0]).addTo(this.tokens),h=h.substring(r[0].length),o+=r[0].length;else{this.scanIndex=o;break}}}}addTo(e){return[...e,...this.tokens]}static matchedBy(e){return n.title_page.test(e)}}class G{constructor(e){this.is_title=!0;const[t,s,o]=e.split(/(\:[^\S\n]*\n?)([\S\s]*)/,3);this.type=t.trim().toLowerCase().replace(/ /g,"_"),this.text=o.replace(/^\s*|\s*$/gm,"")}addTo(e){return[...e,this]}}class f{constructor(e){this.type="scene_heading";const t=e.match(n.scene_heading);t&&(this.text=(t[1]||t[2]).trim());const s=this.text.match(n.scene_number);s&&(this.scene_number=s[1],this.text=this.text.replace(n.scene_number,""))}addTo(e){return[...e,this]}static matchedBy(e){return n.scene_heading.test(e)}}class E{constructor(e){this.type="centered";const t=e.match(n.centered);t&&(this.text=t[0].replace(/[^\S\n]*[><][^\S\n]*/g,""))}addTo(e){return[...e,this]}static matchedBy(e){return n.centered.test(e)}}class p{constructor(e){this.type="transition";const t=e.match(n.transition);t&&(this.text=(t[1]||t[2]).trim())}addTo(e){return[...e,this]}static matchedBy(e){return n.transition.test(e)}}class A{constructor(e,t){this.tokens=[];const s=e.match(n.dialogue);if(s){this.scanIndex=s.length;let o=s[1].trim();const a=!!s[2];a&&this.tokens.push(new V),this.tokens.push(new F);let r=s[3].split(/\n/).reduce((d,l="")=>{const w=d.length-1,u=d[w];return l.length?(n.line_break.test(l)&&(l=""),l=l.trim(),n.parenthetical.test(l)?[...d,new K(l)]:n.lyrics.test(l)?u.type==="lyrics"?(d[w].text=`${u.text}
${l.replace(/^~/,"")}`,d):[...d,new c(l)]:(u==null?void 0:u.type)==="dialogue"?(d[w].text=`${u.text}
${l}`,d):[...d,new J(l)]):d},[]).reverse();this.tokens.push(...r),this.tokens.push(new U(o.startsWith("@")?o.replace(/^@/,"").trim():o.trim()),new M(a?"right":t?"left":void 0)),t&&this.tokens.push(new _),this.dual=a}}addTo(e){return[...e,...this.tokens]}static matchedBy(e){return n.dialogue.test(e)}}class M{constructor(e){this.type="dialogue_begin",this.dual=e}addTo(e){return[...e,this]}}class U{constructor(e){this.type="character",this.text=e}addTo(e){return[...e,this]}}class J{constructor(e){this.type="dialogue",this.text=e}addTo(e){return[...e,this]}}class F{constructor(){this.type="dialogue_end"}addTo(e){return[...e,this]}}class K{constructor(e){this.type="parenthetical",this.text=e}addTo(e){return[...e,this]}}class _{constructor(){this.type="dual_dialogue_begin"}addTo(e){return[...e,this]}}class V{constructor(){this.type="dual_dialogue_end"}addTo(e){return[...e,this]}}class c{constructor(e){this.type="lyrics",this.text=e.replace(/^\s*~(?! )/gm,"")}addTo(e){return[...e,this]}static matchedBy(e){return n.lyrics.test(e)}}class I{constructor(e){this.type="section";const t=e.match(n.section);t&&(this.text=t[2],this.depth=t[1].length)}addTo(e){return[...e,this]}static matchedBy(e){return n.section.test(e)}}class b{constructor(e){this.type="synopsis";const t=e.match(n.synopsis);t&&(this.text=t[1])}addTo(e){return[...e,this]}static matchedBy(e){return n.synopsis.test(e)}}class T{constructor(e){this.type="note";const t=e.match(n.note);t&&(this.text=t[1])}addTo(e){return[...e,this]}static matchedBy(e){return n.note.test(e)}}class D{constructor(){this.type="page_break"}addTo(e){return[...e,this]}static matchedBy(e){return n.page_break.test(e)}}class k{constructor(){this.type="spaces"}addTo(e){return[...e,this]}static matchedBy(e){return n.blank_lines.test(e)}}class j{constructor(e){this.type="action",this.text=e.replace(/^(\s*)!(?! )/gm,"$1").replace(/^( *)(\t+)/gm,(t,s,o)=>s+"    ".repeat(o.length))}addTo(e){return[...e,this]}}class m{static boneyardStripper(e){const t=/^[^\S\n]*\*\//m;let s="";return t.test(e)&&(s=`

`),s}static tokenize(e){let t=e.replace(n.boneyard,this.boneyardStripper).replace(/\r\n|\r/g,`
`);this.scanIndex=0;const s=this.tokenizeTitlePage(t);t=t.substring(this.scanIndex);const o=m.tokenizeScript(t);return[s,o]}static tokenizeTitlePage(e){let t=[];if(y.matchedBy(e)){const s=new y(e);this.scanIndex=s.scanIndex,t=s.addTo(t)}return t}static tokenizeScript(e){return e.split(n.blank_lines).reverse().reduce((o,a)=>{if(!a)return o;if(k.matchedBy(a))return new k().addTo(o);if(f.matchedBy(a))return new f(a).addTo(o);if(E.matchedBy(a))return new E(a).addTo(o);if(p.matchedBy(a))return new p(a).addTo(o);if(A.matchedBy(a)){const h=new A(a,this.lastLineWasDualDialogue);return this.lastLineWasDualDialogue=h.dual,h.addTo(o)}return I.matchedBy(a)?new I(a).addTo(o):b.matchedBy(a)?new b(a).addTo(o):T.matchedBy(a)?new T(a).addTo(o):c.matchedBy(a)?new c(a).addTo(o):D.matchedBy(a)?new D().addTo(o):new j(a).addTo(o)},[]).reverse()}}class g{static reconstruct(e,t=!1){const s=["bold_italic_underline","bold_underline","italic_underline","bold_italic","bold","italic","underline"];e=B(e.replace(n.escape,"[{{{$&}}}]")),t&&(e=e.replace(/^( +)/gm,(o,a)=>"&nbsp;".repeat(a.length)));for(let o of s){const a=n[o];a.test(e)&&(e=e.replace(a,this.inline[o]))}return e.replace(n.note_inline,this.inline.note).replace(/\n/g,this.inline.line_break).replace(/\[{{{\\(&.+?;|.)}}}]/g,this.inline.escape).trimEnd()}}g.inline={note:"<!-- $1 -->",line_break:"<br />",bold_italic_underline:'<span class="bold italic underline">$1</span>',bold_underline:'<span class="bold underline">$1</span>',italic_underline:'<span class="italic underline">$1</span>',bold_italic:'<span class="bold italic">$1</span>',bold:'<span class="bold">$1</span>',italic:'<span class="italic">$1</span>',underline:'<span class="underline">$1</span>',escape:"$1"};class x{parse(e,t){if(typeof e=="undefined"||e===null)throw new Error("Script is undefined or null.");if(typeof e!="string")throw new Error(`Script should be \`string\`, input was \`${Object.prototype.toString.call(e)}\`.`);try{let s="";const[o,a]=m.tokenize(e);this.tokens=o.concat(a);const h=o.find(r=>r.type==="title");return h!=null&&h.text&&(s=P(g.reconstruct(h.text).replace("<br />"," ").replace(/<(?:.|\n)*?>/g,""))),{title:s,html:{title_page:o.map(r=>this.to_html(r)).join(""),script:a.map(r=>this.to_html(r)).join("")},tokens:t?this.tokens:[]}}catch(s){throw s.message+=`
Please submit an issue to https://github.com/jonnygreenwald/fountain-js/issues`,s}}to_html(e){let t="";switch(e!=null&&e.text&&(t=g.reconstruct(e.text,e.type==="action")),e.type){case"title":return`<h1>${t}</h1>`;case"author":case"authors":return`<p class="authors">${t}</p>`;case"contact":case"copyright":case"credit":case"date":case"draft_date":case"notes":case"revision":case"source":return`<p class="${e.type.replace(/_/g,"-")}">${t}</p>`;case"scene_heading":return`<h3${(e.scene_number?` id="${e.scene_number}">`:">")+t}</h3>`;case"transition":return`<h2>${t}</h2>`;case"dual_dialogue_begin":return'<div class="dual-dialogue">';case"dialogue_begin":return`<div class="dialogue${e.dual?" "+e.dual:""}">`;case"character":return`<h4>${t}</h4>`;case"parenthetical":return`<p class="parenthetical">${t}</p>`;case"dialogue":return`<p>${t}</p>`;case"dialogue_end":return"</div>";case"dual_dialogue_end":return"</div>";case"section":return;case"synopsis":return;case"note":return`<!-- ${t} -->`;case"boneyard_begin":return"<!-- ";case"boneyard_end":return" -->";case"action":return`<p>${t}</p>`;case"centered":return`<p class="centered">${t}</p>`;case"lyrics":return`<p class="lyrics">${t}</p>`;case"page_break":return"<hr />";case"spaces":return}}}const X=N("h3",null," Cut Scene ",-1),z=["innerHTML"],q=W({name:"TitleScreen"}),ee=Object.assign(q,{setup(i){let e=new x;const t=`


Title: Big Fish
Credit: written by
Author: John August
Source: based on the novel by Daniel Wallace
Notes:	
	FINAL PRODUCTION DRAFT
	includes post-production dialogue 
	and omitted scenes
Copyright: (c) 2003 Columbia Pictures

This is a work of make believe, 
remember this is a work of make believe, 
but the alligators are real.

====

**FADE IN:**

A RIVER.

We're underwater, watching a fat catfish swim along.  

This is The Beast.

EDWARD (V.O.)
There are some fish that cannot be caught.  
It's not that they're faster or stronger than other fish.  
They're just touched by something extra.  
Call it luck.  
Call it grace.  
One such fish was The Beast.  

The Beast's journey takes it past a dangling fish hook, baited with worms.  
Past a tempting lure, sparkling in the sun.  
Past a swiping bear claw.  
The Beast isn't worried.

EDWARD (V.O.)(CONT'D)
By the time I was born, he was already a legend.  
He'd taken more hundred-dollar lures than any fish in Alabama. 
Some said that fish was the ghost of Henry Walls, 
a thief who'd drowned in that river 60 years before.   
Others claimed he was a lesser dinosaur, left over from the Cretaceous period.

INT.  WILL'S BEDROOM - NIGHT (1973)

WILL BLOOM, AGE 3, listens wide-eyed as his father EDWARD BLOOM, 40's and handsome, tells the story.  
In every gesture, Edward is bigger than life, describing each detail with absolute conviction.

EDWARD
I didn't put any stock into such speculation or superstition.  
All I knew was I'd been trying to catch that fish since I was a boy no bigger than you.  
(closer)
And on the day you were born, that was the day I finally caught him.

EXT.  CAMPFIRE - NIGHT (1977)

A few years later, 
and Will sits with the other INDIAN GUIDES as Edward continues telling the story to the tribe.  

EDWARD
Now, I'd tried everything on it:  
worms, lures, peanut butter, peanut butter-and-cheese.  
But on that day I had a revelation:  if that fish was the ghost of a thief, 
the usual bait wasn't going to work.  
I would have to use something he truly desired. 

Edward points to his wedding band, glinting in the firelight.

LITTLE BRAVE
(confused)
Your finger?

Edward slips his ring off.

EDWARD
Gold.

While the other boys are rapt with attention, Will looks bored.  
He's heard this story before.

EDWARD
I tied my ring to the strongest line they made -- strong enough to hold up a bridge, 
they said, if just for a few minutes -- and I cast upriver.

INT.  BLOOM FRONT HALL - NIGHT (1987)

Edward is chatting up Will's pretty DATE to the homecoming dance.  
She is enjoying the story, but also the force of Edward's charisma.  
He's hypnotizing.

EDWARD (CONT'D)
The Beast jumped up and grabbed it before the ring even hit the water.  
And just as fast, he snapped clean through that line.

WILL, now 17 with braces, is fuming and ready to leave.  
His mother SANDRA -- from whom he gets his good looks and practicality -- stands with him at the door.

EDWARD
You can see my predicament.  
My wedding ring, the symbol of fidelity to my wife, 
soon to be the mother of my child, 
was now lost in the gut of an uncatchable fish.

ON WILL AND SANDRA

WILL
(low but insistent)
Make him stop.

His mother pats him sympathetically, then adjusts his tie.

WILL'S DATE
What did you do?

EDWARD
I followed that fish up-river and down-river for three days and three nights, 
until I finally had him boxed in.

Will regards his father with exasperated contempt.

EDWARD
With these two hands, I reached in and snatched that fish out of the river.  
I looked him straight in the eye.  
And I made a remarkable discovery. 

INT.  TINY PARIS RESTAURANT (LA RUE 14\xB0) - NIGHT (1998)

WILL, now 28, sits with his gorgeous bride JOSEPHINE.  This is their wedding reception, crowded with their friends and family.  They should be joyful, but Will is furious.

Edward has the floor, ostensibly for a toast.  The room is cozy and drunk.

EDWARD
This fish, the Beast.  The whole time we were calling it a him, when in fact it was a her.  It was fat with eggs, and was going to lay them any day.

Over near the doorway, we spot Sandra, just returned from the restrooms.  She looks gorgeous.  She couldn't be any happier if this were her own wedding.

EDWARD
Now, I was in a situation.  I could gut that fish and get my ring back, but doing so I would be killing the smartest catfish in the Ashton River, soon to be mother of a hundred others.  

Will can't take any more.  Josephine tries to hold him back, but he gets up and leaves.  Edward doesn't even notice.

EDWARD (CONT'D)
Did I want to deprive my soon-to-be-born son the chance to catch a fish like this of his own?  This lady fish and I, well, we had the same destiny.

As he leaves, Will mutters in perfect unison with his father--

EDWARD AND WILL
We were part of the same equation.

Will reaches the door, where his mother intercepts him.

SANDRA
Honey, it's still your night.

Will can't articulate his anger.  He just leaves.

EDWARD
Now, you may well ask, since this lady fish wasn't the ghost of a thief, why did it strike so quick on gold when nothing else would attract it?
(closer; he holds up his ring)
That was the lesson I learned that day, the day my son was born.  

He focuses his words on Sandra.  This story is -- and has always been -- about her more than anyone.

EDWARD
Sometimes, the only way to catch an uncatchable woman is to offer her a wedding ring.

A LAUGH from the crowd.  

Edward motions for Sandra to get up here with him.  As she crosses, we can see that thirty years of marriage has not lessened their affection for each other.  

As they kiss, Edward tweaks her chin a special little way.  The crowd APPLAUDS.

Edward toasts the happy couple.  Josephine covers well for her absent husband, a smile as warm as summer.

Edward downs his champagne in a gulp.

EXT.  OUTSIDE LA RUE 14\xB0 - NIGHT

We come into the middle of an argument on the sidewalk. 
Occasional PASSERSBY take notice, especially as it gets more heated.  
Both men are a little drunk.

EDWARD
What, a father's not allowed to talk about his son?

WILL
(disbelieving)
I am a footnote in that story.  I am the context for your great adventure.  Which never happened!  Incidentally!  You were selling novelty products in Wichita the day I was born.  

EDWARD
(shaking his head)
Jesus Christ.

WILL
Friend of yours?  Did you help him out of a bind?

EDWARD
Come on, Will.  Everyone likes that story.

WILL
No Dad, they don't.  _I_ do not like the story.  Not anymore, not after a _thousand_ _times_.  I know all the punchlines, Dad.  I can tell them as well as you can.
(closer)
For one night, one night in your entire life, the universe does not revolve around Edward Bloom.  It revolves around me and my wife.  How can you not understand that?

A long beat, then...

EDWARD
(low)
Sorry to embarrass you.

Will won't let him get the last word.

WILL
You're embarrassing yourself, Dad.  You just don't see it.

ANGLE ON Edward.  Fine.  A hand to wave, enough of you. 

He walks away.

ANGLE ON Will, still fuming with righteous anger.  It's then we FREEZE FRAME.

WILL (V.O.)(CONT'D)
After that night, I didn't speak to my father again for three years.  

INT.  A.P. NEWSROOM (PARIS) - DAY  

A typically busy day.  On hold with the phone cradled under an ear, Will sorts through a bundle of mail dropped on his desk.

WILL (ON PHONE)
(without pauses)
William Bloom with the Associated Press if I could just...

He's put back on hold.  Returning to the mail, he finds a hand-addressed envelope.  Rips it open.

WILL (V.O.)(CONT'D)
We communicated indirectly I guess.  In her letters and Christmas cards, my mother would write for both of them.

INT.  BLOOM HOUSE KITCHEN - DAY

At the table, Sandra talks on the phone while Edward fixes a sandwich.

WILL (V.O.)
When I'd call, Mom would say that Dad was out driving.  Or swimming in the pool.

Edward takes a seat, starting to eat his sandwich.

WILL (V.O.) (CONT'D)
True to form, we never talked about our not talking.

INT.  BLOOM HOUSE MASTER BEDROOM - NIGHT

Sandra stands by the window, watching as...

EXT.  BLOOM BACK YARD - NIGHT [CONTINUOUS]

Edward swims laps in the family pool.  He's born to the water.

WILL (V.O.)
The truth is, I didn't see anything of myself in my father, and I don't think he saw anything of himself in me.  We were like strangers who knew each other very well.

EXT.  RIVER - DAY

Edward stares intently into the water, a lion in wait.

WILL (V.O.)
In telling the story of my father's life, it's impossible to separate the fact from the fiction, the man from the myth.  The best I can do is to tell it the way he told me.

We LOOK DOWN at the river, where Edward's reflection is caught in the dark water.  As the water ripples past, something changes.  

Sure enough, as we LOOK UP again, it's a younger EDWARD BLOOM, 20's, staring into the water.  He's not just handsome, not just charming.  It's as if all the forces of the natural world had conspired to create him.

WILL (V.O.) (CONT'D)
It doesn't always make sense, and most of it never happened.

Suddenly, this Edward thrusts both hands into the water, grabbing hold of

THE BEAST.

He brings the catfish up to his face.  Looks it right in the eye.  A beat, then the Beast spits out Edward's gold ring.

WILL (V.O.) (CONT'D)
But that's what kind of story this is.

Smiling, Edward takes the ring, then throws the Beast back into the water with a splash.

TITLE OVER:

> _BIG FISH_ <

INT.  HOSPITAL ROOM - DAY  

Young Dr. Bennett stands between the Wife's legs.  She's flustered and sweating, but the doctor has a comforting bedside manner...

YOUNG DR. BENNETT
Now, Mrs. Bloom, I'll need you to give me one good push.  On three.  One... 

Suddenly, we hear a POP as a slimy mass of human being rockets into the doctor's unprepared hands.  Bennett tries to hold tight, but the infant is slippery like a fish.  It shoots up into air.

The NURSES and the Husband try to grab the baby, but no one can hold it.  As the newborn sails upward TOWARDS CAMERA, we can see a GIGGLING SMILE on its face.

As it falls, the newborn knocks over a tray, which provides it a ramp to slide right out of the room.  Everyone races after it.

INT.  HOSPITAL HALLWAY - DAY  

Bursting through the doors --

YOUNG DR. BENNETT
Grab that baby!

A NURSE finally scoops up the slippery baby.  Everyone lets out a collective sigh of relief.

WILL (V.O.)
My father's birth would set the pace for his unlikely life.  No longer than most men's, but larger.  And as strange as his stories got, the endings were always the most surprising of all.

INT.  HALF-DARK PARIS APARTMENT - (PRESENT) DAY

Over the sound of rain, a phone RINGS on a chair.  By the tone of the ring, we know we're not in the U.S. -- it has that insistent European sound.  

As it keeps RINGING, we look to see the apartment is mostly empty, just a few half-unpacked boxes.  A cradle is still in its carton.

KEYS in the lock.  LAUGHTER in the hallway.  The door swings open to reveal a drenched Will (29) carrying four sacks of groceries, the bottoms collapsing from the rain.  His wife Josephine (28) pushes past him to get the phone.  

JOSEPHINE
Allo oui?

Will begins stripping out of his wet clothes, each layer unleashing a new drizzle.  He plays it up, trying to get a reaction out of Josephine.

JOSEPHINE (CONT'D)
(on phone)
Yes, he's here.

She hands the phone to Will, concerned.

JOSEPHINE (CONT'D)
It's your mother.

Half-stripped, Will takes the phone.  This won't be good news.

WILL
(on phone)
Hi.  Uh-huh.  Uh-huh.

As Josephine takes off her rain coat, we see she is very, very pregnant.  She listens carefully to Will's side of the conversation, trying to gauge how bad the news is.

WILL (CONT'D)
What does Dr. Bennett say?  Okay.  No, sure, let me talk to him.   I'll wait.

He covers the mouthpiece.  Looks over to Josephine.

JOSEPHINE
It's bad.

WILL
It's more than they thought.  They're going to stop chemo.

JOSEPHINE
You need to go.

WILL
Probably tonight.

A beat.

JOSEPHINE
I'm going with you.

WILL
You don't have to.

JOSEPHINE
(a simple fact)
I'm going with you.

INT.  AIR FRANCE 747 - NIGHT

As the plane continues boarding, a STEWARDESS recites the welcome spiel in French.  Will has a window seat in coach.  Josephine sits beside him, putting on hand lotion.  

Taking his hands, she rubs the excess into him.  There's an effortless intimacy between them.  She can pinpoint what he's feeling before he can.

INT.  747 / FLYING - NIGHT

Hours later, and the lights are dimmed.  Most of the PASSENGERS are asleep, including Josephine.  Her head is propped against Will's shoulder, her hands tucked under her belly. 

Will watches her sleep, brushing back her hair.  A beat, then he notices a BORED BOY in the next row over.  

Off the glow of the reading light, the boy is using his hands to cast shadows on the seat back.   The kid is pretty good, making a convincing bird, a passable monkey, and finally a dog.

We PUSH IN on the silhouettes.

EDWARD (O.S., PRELAP)
So which one's it gonna be?  The Monkey in the Barn, the Dog in the Road?

Focusing on the final shadow, we...

MATCH CUT TO:

INT.  BLOOM HOUSE - NIGHT  

...come to find Edward making the shapes. 

Will (6) sits in his pajamas on the floor next to him.  The endtable lamp lies between them, its shade off to cast big shadows on the wall.

WILL
The one about the witch.

EDWARD
Your mom says I can't tell you that one anymore.  You get nightmares.

WILL
I'm not scared.

Edward looks around for a beat, seeing if his wife is in earshot.  He then leans in, complicitous.

EDWARD
Neither was I.  At first.

Will smiles, excited to hear the forbidden story.

EDWARD (CONT'D)
This all happened in the swamp outside of Ashton.  Kids weren't supposed to go out in the swamp, on account of the snakes and spiders and quicksand that would swallow you up before you could even scream.  But there were five of us out there that night:  Me, Ruthie, Wilbur Freely, and the Price Brothers, Don and Zacky.

Edward holds up his hand, counting the names on his fingers.  

EDWARD (CONT'D)
Not a one of us knew what was in store.

As his hand moves past the light, we

COME TO:

A flashlight SWEEPS past.  We are...

EXT.  FIELD AT THE SWAMP EDGE - NIGHT

The night is WHIRRING and BREATHING, alive.  The moon hangs low, casting long shadows.  

Five kids walk past in silhouette.  Four have flashlights on.  The fifth keeps tripping, crashing into YOUNG EDWARD (10).

EDWARD
Zacky, turn your flashlight on!

ZACKY
I don't got any batteries!

Red-headed ZACKY PRICE is 10.  His brother DON PRICE is 12, and a lot bigger than the others.

DON PRICE
Then why'd you bring it?

ZACKY
I don't want to be in the swamp with a witch and no flashlight.

WILBUR FREELY, also 10, is the black asthmatic son of a sharecropper.  Redheaded RUTHIE MACKLIN, 8, is happy just to be there.

EDWARD
Is it true she got a glass eye?

WILBUR FREELY
I heard she got it from Gypsies.

EDWARD
What's a Gypsy?

ZACKY
Your momma's a Gypsy.

DON PRICE
Your momma's a bitch.

RUTHIE
You shouldn't swear.  There's ladies present.

DON PRICE
Shit.

ZACKY
Damn.

WILBUR FREELY
Screw.  

EDWARD
(whispering)
Turn off your flashlights!  She'll see 'em.

MOVING UP behind the kids, we find ourselves at the gates of...

EXT.  A CREEPY OLD HOUSE - NIGHT  

ADULT EDWARD (V.O.)
Now, it's common knowledge that most towns of a certain size have a witch, if only to eat misbehaving children and the occasional puppy who wanders into her yard.  Witches use those bones to cast spells and curses that make the land infertile.

We PULL BACK, and BACK, revealing more of the Gothically creepy house:  its broken windows, strangling vines, and eerie gargoyles half-buried in the dirt.  Even bats are afraid to fly over it.  

In the moonlight, the house is especially sinister.  Who knows what is lurking in the shadows?

ADULT EDWARD (V.O.)(CONT'D)
Yet of the all the witches in Alabama, there was one who was the most feared.  For she had one glass eye, which was said to contain mystical powers.

We finally come to the kids, staring in through the gate.

WILBUR FREELY
I hear if you look right at it, you can see how you're gonna die.

EDWARD
That's bull-s-h-i-t, that is.  She's not even a real witch.

DON PRICE
You're so sure, why don't you go in and get that eye?  I heard she keeps it in a box on her nighttable.

Edward looks back at the spooky house.

DON PRICE (CONT'D)
Or are you too scared?

EDWARD
I'll go in right now and get that eye.

DON PRICE
Then do it.

EDWARD
Fine, I will.

DON PRICE
Fine, you do it.

EDWARD
Fine, I'm doing it.

He hands Zacky his flashlight, then starts climbing the gate.

RUTHIE
Edward, don't!

WILBUR FREELY
She'll make soap out of you!
(to Ruthie)
That's what she does, she makes soap out of people.

Edward drops down on the far side of the gate.  Truth be told, Edward is scared, but he forges ahead anyway.  

Wilbur looks to Ruthie, and they're in complete agreement.  They get the hell out of there.  Zacky would run too, but Don holds him by the collar.

EXT. APPROACHING THE HOUSE

Edward curves around the tall bushes that hide the front door.  Anything could jump out of them. 

He steps on the porch.  The boards SQUEAL and CREAK, but he continues on.  A cat SCREAMS OUT from a broken wicker rocker.  Catching his breath, Edward reaches the front door.

The doorknob is ancient brass, two projections that look like horns.  Yet Edward extends his hand, reaching closer and closer before he finally

RINGS THE DOORBELL.

Impossibly fast, the door opens, revealing an OLD WOMAN with a patch over her left eye.  She looks like she's been dead for years, but too stubborn to lie down.

EDWARD
(calm and straightforward)
Ma'am, my name is Edward Bloom, and there's some folks'd like to see your eye.

EXT. BACK AT THE GATE - NIGHT  

Zacky and Don Price wait for Edward, each moment more convinced he's already dead.  But suddenly, he's back at the gate.

DON PRICE
You get the eye?

EDWARD
I brought it.

DON PRICE
(dubious)
Let's see it.

The Old Woman steps out of the shadows behind Edward, flipping up her eye patch.  When their flashlight beam hits her left eye, it shines with a hellish glow.

We RUSH IN on Zacky, who is paralyzed by what he sees.  

CUT TO:

EXT.  FRONT PORCH OF HOUSE - DAY

An OLD MAN -- Zacky -- stands on a wobbly stepladder, changing a lightbulb.  Suddenly, the ladder gives way and he falls.  Dead.

EXT.  AT THE GATE - NIGHT  

We RUSH IN on Don Price.

CUT TO:

INT.  FRATERNITY HOUSE BATHROOM - DAY

Twenty-year old Don Price falls face-forward on the tile, face mushed in the grout.  Very much dead.

EXT.  AT THE GATE - NIGHT  

Don and Zacky both tremble with fear.  The latter has tears in his eyes.

ZACKY
I saw how I was gonna die.  I was old, and I fell.

DON PRICE
I wasn't old at all.

The brothers suddenly bolt.  Still standing next to the Old Woman, Edward smiles.

EXT.  AT THE OLD WOMAN'S DOOR - NIGHT

Edward helps her back inside.  He could leave now, but curiosity gets the better of him.

EDWARD
I was thinking about death and all.  About seeing how you're gonna die.

The Old Woman turns to him slightly, still not facing him.

EDWARD (CONT'D)
I mean, on one hand, if dying was all you thought about, it could kind of screw you up.  But it could kind of help you, couldn't it?  Because you'd know that everything else you can survive.

The Old Woman smiles a little, a crooked grin of broken teeth.

EDWARD (CONT'D)
I guess I'm saying, I'd like to know.

The Old Woman turns leaning her face right in front of his.  And on a silent count of one, two, three -- Edward looks into The Eye.

This time we don't cut.  Instead, we HOLD ON Edward as he witnesses his death.  He stares transfixed, perplexed and amused.  Whatever he sees, it's not as dire as the other boys.  His future has something strange in store.

EDWARD (CONT'D)
Huh.  That's how I go?

The Old Woman nods.  Still a little overwhelmed, Edward turns and leaves.

ADULT EDWARD (V.O.)
From that moment on, I no longer feared death.  And for that, I was as good as immortal.

As Edward leaves, the door swings SHUT on its own.

MATCH CUT TO:

INT./EXT.  BLOOM HOUSE - (PRESENT) DAY

The front door opens to reveal Will and Josephine on the porch with their bags.  REVERSE to Will's mother Sandra (53), surprised and a little annoyed. 

SANDRA
How did you get here?

WILL
We swam.  The Atlantic, it's not that big really.

SANDRA
Ruth McHibbon offered to pick you up at the airport.

WILL
We rented a car.

SANDRA
(simply)
You didn't need to do that.  You just didn't.

A beat.  Starting over...

WILL
Hi, Mom.

He leans in and hugs her.  She surrenders, squeezing her son tight.  Will and his mother are cut from the same cloth -- strong-willed but practical.  They've always been close.

SANDRA
I'm so glad you're here.

That hug finished, Sandra pushes past her son to her daughter-in-law.  Seeing the size of her belly --

SANDRA
You shouldn't have flown.  But...

They hug.  

JOSEPHINE
It's good to see you.  You look beautiful.

It's not flattery.  It's the truth.

SANDRA
Thank you.  I'll bet you need to --

JOSEPHINE
Yes.

SANDRA
Down the hall on the right.  The door sticks.  You have to really pull it.

Josephine squeezes past, a smile to her husband -- be nice.  Will heads back to the rental car to retrieve luggage.  Sandra follows him.

Coming down the driveway, we get to see the house for the first time:  an older suburban home, three bedrooms, big for the neighborhood, and nicely grown into the lot.  KIDS are playing on the street.

WILL
Is that Dr. Bennett's car?

SANDRA
He's up with your father.

Heading back to the house...

WILL
How is he?

SANDRA
He's impossible.  He won't eat.   And because he won't eat, he gets weaker.  And because he's weaker, he doesn't want to eat.

WILL
How much time does he have left?

SANDRA
You don't talk about those things.  Not yet.

INT.  KITCHEN - DAY

Sandra is pouring iced tea for Will and Josephine.

DR. JULIUS BENNETT (85) enters from the foyer, still winded from coming down the stairs.  He was the town's first Black physician.  He's still the town's best physician.

DR. BENNETT
Will.

WILL
Dr. Bennett.  It's good to see you.
(they shake)
My wife, Josephine.

DR. BENNETT
A pleasure.

He judges her belly.

DR. BENNETT (CONT'D)
You're seven months.

JOSEPHINE
(impressed)
To the day.

He leans close to her, whispering in her ear...

DR. BENNETT
It's a boy.

She smiles, surprised but not doubting.  Will looks over -- what did he say?  Josephine shakes her head.

Back to the main subject...

SANDRA
You don't think he looks any worse.

DR. BENNETT
No.  I would say he's the same.

And in the silence that follows, a lot is said.  It wasn't the upbeat reply Sandra was hoping for.

WILL
Can I see him?

DR. BENNETT
Absolutely.  Be good for you to talk to him.

A moment of awkwardness -- everyone here knows they haven't spoken in years.

Sandra hands Will a squat can of Ensure from the case on the counter.

SANDRA
Get him to drink one of these.  He won't, but tell him he has to.

INT.  FOYER - DAY

Coming out from the kitchen, Will slowly climbs the stairs.  They CREAK with every step.

The wall is filled with family photos, happier times.  Most of the pictures are of Will, starting when he was an infant and ending at his wedding.  As he climbs the stairs, we can see him growing up with every step.

INT.  UPSTAIRS HALLWAY - DAY

A crack of sunlight spills around the half-open door at the end of the hallway.  Will walks towards it, running a hand along the wallpaper.

Almost at the door, he stops for a beat.  Gets his breath.  Then goes inside.

INT.  GUEST ROOM - DAY

Edward Bloom, 61, lies asleep on the bed.  Although he's not the vibrant man we've seen before, it's not as bad we feared.  The illness has been quick, and left him largely intact.

There are no I.V.'s, no monitors, nothing.

Coming up to the bed --

WILL
Dad?

Edward cracks open an eye, a beat before he focuses.  He tries to say something, but no words come out.

He looks over at a pitcher on the nightstand.  Will pours him a glass of water, helping him hold it to his parched lips.

Finished, Edward sets down the glass by himself.  A very long, tense beat.  Will almost speaks again to fill the silence.  

Finally...

EDWARD
You --
(he points)
-- are in for a surprise.

WILL
Am I?

EDWARD
Having a kid changes everything.  I mean, there's the diapers and the burping and the midnight feedings...

WILL
Did you do any of that?

EDWARD
No, but I hear it's terrible.  Then you spend years trying to corrupt and mislead this child, fill its head with nonsense and still it turns out perfectly fine.

WILL
You think I'm up for it?

EDWARD
You learned from the best.

Will doesn't rise to the challenge.  A beat, then he remembers the can of Ensure.  Holds it up.  Edward recoils.

WILL
Just drink half the can.  I'll tell her you drank the whole thing.  Everyone wins.

A beat, then Edward rolls his eyes.  Fine.  Will cracks open the can, finding a straw on the nightstand.

EDWARD
People needn't worry so much.  It's not my time yet.  This isn't how I go.

WILL
Really.

EDWARD
Truly.  I saw it in The Eye.

WILL
The Old Lady by the swamp.

EDWARD
She was a witch.

WILL
No, she was old and probably senile.  Maybe schizophrenic.

EDWARD
I saw my death in that eye.  And this is not how it happens.

WILL
So how does it happen?

EDWARD
Surprise ending.  Wouldn't want to ruin it for you.

Edward slurps down as much of the Ensure as he can stand, then pushes the can away.  He swallows with difficulty.

EDWARD (CONT'D)
There was this panhandler who used to stop me every morning when I came out of this coffee shop near the office.

WILL
Okay.

EDWARD
And every day I gave him a quarter.  Every day.  Then I got sick and was out for a couple of weeks.  And when I went back there, you know what he said?

WILL
What did he say?

EDWARD
You owe me three-fifty.

WILL
Really.

EDWARD
True story.

A beat.

WILL
When did you ever work in an office?

EDWARD
There's a lot you don't know about me.

WILL
You're right.

Edward gives a wry smile.  He walked into that.

EDWARD
Your mother was worried we wouldn't talk again.  And look at us.  We're talking fine.  We're storytellers, both of us.  I speak mine out, you write yours down.  Same thing.

Will won't commit to Edward's assessment.

WILL
Dad, I'm hoping we can talk about some things while I'm here.

EDWARD
You mean, while _I'm_ here.

WILL
I'd just like to know the true versions of things.  Events.  Stories.  You.

Edward LAUGHS a little, which becomes a COUGH.  The HACKING escalates until another drink of water gets it under control.  It's not clear whether any of this was an act to keep from talking.

EDWARD
Your mother hasn't been keeping up the pool.  If you wanted to you could...

WILL
I will.

EDWARD
You know where the chemicals are?

WILL
I used to do it when you were gone, remember?  I used to do it a lot.

He didn't mean for that to sound so pointed.  Taking the half-empty Ensure, Will gets up to go.  He's at the door when...

EDWARD
I was never much for being at home, Will.  It's too confining.  And this, here.  Being stuck in bed.  Dying is the worst thing that ever happened to me.

He smiles at his joke.

WILL
I thought you weren't dying.

EDWARD
I said this isn't how I go.  The last part is much more unusual.  Trust me on that.

INT.  UPSTAIRS HALLWAY - DAY

Shutting the door behind himself, Will drinks the rest of the Ensure himself.  Edward was right.  It tastes horrible.

Heading for the stairs, Will walks past an open door.  As he leaves frame, we STAY BEHIND to look inside...

INT.  WILL'S BEDROOM - DAY  [FLASHBACK]

...where an eight-year old Will is propped up in bed, his face covered with chicken pox and pink calamine lotion.  He's showing Edward how many bumps there are on his arm.

YOUNG WILL
Dr. Bennett says I'm going to have to be home for a week.

EDWARD
That's nothing.  I once had to stay in bed for three years.

YOUNG WILL
Did you have chicken pox?

EDWARD
I wish.

CUT TO:

INT.  TINY CHURCH - DAY  

Wearing a white shirt and tie, YOUNG EDWARD -- still about 10 -- sings "Down to the River My Lord" along with the CONGREGATION.  His voice is high and thin, but he gives it his all.

Suddenly, his voice CRACKS and DROPS a half-octave.  And then another.  His friends Wilbur Freeley and Ruthie look over, wondering what's wrong.  Embarrassed, Edward just keeps SINGING, trying to follow along with the baritone part.

He pulls at his collar.  Then pulls again, his face getting red.  Starting to panic, he loosens his tie.  He's starting to undo the collar button when it POPS off by itself.  Two more buttons fly off.  One hits a CHUBBY WOMAN in the neck.

ON HIS SHOES

As we watch, Edward's pant cuffs rise inch by inch -- that's how fast he's growing.

EDWARD (V.O.)
Truth is, no one quite knew what was wrong.  Most times, a person grows up gradually.  I found myself in a hurry.

INT.  YOUNG EDWARD'S BEDROOM - DAY  

Young Edward lies in bed, his limbs connected to various pulleys and levers to support his weight.  He has a dozen encyclopedias around him, and another dozen on the floor.

EDWARD (V.O.)
My muscles couldn't keep up with my bones, and my bones couldn't keep up with my body's ambition.  So I spent the better part of three years confined to my bed, with the World Book Encyclopedia being my only means of exploration.  I had made it all the way to the "G's," hoping to find an answer to my gigantificationism, when I uncovered an article about the common goldfish.

INSERT:  The encyclopedia article, complete with drawings.

YOUNG EDWARD
(reading)
"Kept in a small bowl, the goldfish will remain small.  With more space, the fish can grow double, triple, or quadruple its size."

Young Edward thinks this through.

EDWARD (V.O.)
It occurred to me then, that perhaps the reason for my growth was that I was intended for larger things.  After all, a giant man can't have an ordinary-sized life.

EXT.  BASEBALL FIELD - DAY  

The CRACK of a bat announces the game-winning home run.  The crowd CHEERS the swing, and especially the batter as he rounds the bases.

Although we've seen him briefly before, this is our first real exposure to GROWN-UP EDWARD, who we'll follow from roughly the ages of 18 to 30.  

EDWARD (V.0.)
As soon as my bones had settled in their adult configuration, I set upon my plan to make a bigger place for myself in Ashton.

EXT.  SCHOOL FIELDS - DAY  

SINGLE SHOTS:  Football hero Edward leads his team to victory.  On the sidelines, a PRETTY GIRL admits the name of her secret love:

GIRL
Edward Bloom!

The other GIRLS SQUEAL in agreement.  Don Price looks over, glowers.

EXT.  NEIGHBORHOOD - DAY  

SINGLE SHOT:  A lawnmower ROARS along the grass.  We LOOK UP to see who's pushing it, but it's not Edward.  It's one of his teenage EMPLOYEES.

Edward is back at the truck, which is painted to read, "Bloom Landscaping."  He has workers on every lawn.  

He signs an autograph for an ADMIRING CUB SCOUT.

INT.  BASKETBALL COURT - DAY  

Edward takes an impossible shot at the buzzer from the other end of the court.  Naturally, he makes it, winning the game.

As the crowd goes wild for Edward, Don Price is the only teammate who doesn't mob him.

EXT.  TOWN - DAY  

Edward carries a dog out of a burning house.

INT.  SCIENCE FAIR - DAY

Edward wins a blue ribbon for his invention, a machine labelled "Perpetual Motion."  He and the JUDGE pose for a photograph.  A FLASH.

Pissed, Don Price throws his crappy lima bean plants in the trash.

INT.  HIGH SCHOOL STAGE - DAY

A dashingly handsome Edward leads the CAST out for a curtain call.  He's the star of the show.  Off to the side, we see Don Price is the ass-end of a horse costume.

Edward soaks in his applause, smiling and gracious.

EXT.  GRADUATION STAGE - DAY  

Edward accepts his diploma.  The PRINCIPAL hugs him tight.

EDWARD (V.O.)
I was the biggest thing Ashton had ever seen.  Until one day, a stranger arrived.

EXT.  FARM - DAY

As two FARMERS shake their heads, we REVERSE to a show a massive hole punched through the side of a barn.  It's roughly the shape of man, but no human could be that large.

EXT.  SHEEP PEN - DAY

Two fat ewes look up, a shadow falling across them.  They BLEAT in panic as 

TWO OVERSIZED HANDS

reach in and scoop them up.  Their protests continue as they're carried away, one under each arm.  We still haven't seen the full stranger.

EXT.  COURT HOUSE - DAY

A MOB of about 50 have gathered, many of them with shotguns.  Amid the crowd we see Don Price.

SHARECROPPER
He ate an entire cornfield!

LITTLE GIRL
He ate my dog!

HOT-BLOODED SHOTGUN TOTER
If you ain't gonna stop him Mayor, we will!

MAYOR
I won't have mob violence in this town.  Now, has someone tried talking to him?

SOME FARMER
You can't reason with 'im!

SHEPHARD
He's a monster!

Agreement from the crowd.  And then...

A VOICE (O.S.)
I'll do it.

Everyone turns to see who said that.  The crowd parts to reveal none other than Edward Bloom.  Don Price glowers.

EDWARD
I'll talk to him.  See if I can get him to move on.

MAYOR
Son, that creature could crush you without trying.

EDWARD
Trust me, he'll have to try.

EXT.  HILL OUTSIDE ASHTON - DAY

Edward climbs up the last bit of the steep hillside, reaching the mouth of a cave.  Outside, buzzards squabble over the remains of the giant's feast:  broken barrels, bones picked clean.

In his most serious voice, Edward calls out:

EDWARD
Hello!

There's no answer.

EDWARD  (CONT'D)
My name is Edward Bloom!  I want to talk to you!

From deep in a cave, a thunderous voice:

VOICE (O.S.)
GO AWAY!

The giant's voice has such force, it blows Edward's hair back.

EDWARD
I'm not going anywhere until you show yourself.  

A beat, then we hear a RUMBLE, like a train coming.  Edward braces himself, fists ready for a fight, if that's what it's going to take.

As the RUMBLE gets louder, the ground starts to shake.  Even Edward starts to worry.  Just how big is this guy?  

EDWARD (V.O.)(CONT'D)
Armed with the foreknowledge of my own death, I knew the giant couldn't kill me.  All the same, I preferred to keep my bones unbroken.

Edward picks up a stone, ready to play David to Goliath.

Then suddenly, the giant bursts forth.  Hunched over, he slams into a stunned Edward, knocking him halfway down the hill.

KARL THE GIANT is bigger than any man you've ever seen.  Not just tall, but massive.  He's completely feral, with a beard to his elbow and skin scratched and blistered.  What remains of his clothes are ragged and muddy.  God knows what's living in his matted hair.

Karl leans over Edward, blocking the sun.  Edward throws his rock, but it just bounces off.  The giant didn't even notice it.

KARL
Why are you here?

Edward ponders the best response, settling on...

EDWARD
So you can eat me.  The town decided to send a human sacrifice, and I volunteered. 

Karl's eyes narrow, confused.  Edward stands up.

EDWARD (CONT'D)
My arms are a little stringy, but there's some good eating on my legs.  I mean, I'd be tempted to eat them myself.
(beat)
So I guess, just, if you could get it over with quick.  Because I'm not much for pain, really.

Edward closes his eyes, hands at his side, ready to be eaten.  Karl just stares at him, not sure what to do.

After a beat, Edward opens his eyes a tiny bit, just to see what the giant is doing.  Relieved to see he's not licking his chops --

EDWARD (CONT'D)
Look, I can't go back.  I'm a human sacrifice.  If I go back, everyone will think I'm a coward.  And I'd rather be dinner than a coward.

Karl sits down with a BOOM, dejected.

EDWARD (CONT'D)
Here, start with my hand.  It'll be an appetizer.

Reaching up, Edward shoves his hand into Karl's mouth.  But the giant spits it back out.

KARL
I don't want to eat you.  I don't want to eat anybody.  It's just I get so hungry.  I'm too big.

And that's the sad truth.  Karl is less a monster than a freak -- a giant man, but in the end, just a man.

Edward takes a seat beside him.

EDWARD
Did you ever think maybe you're not too big?  Maybe this town's just too small.  I mean, look at it.

Circling behind them, we look down at Ashton -- a tiny town in a tiny valley.

EDWARD (CONT'D)
Hardly two stories in the whole place.  Now I've heard in real cities, they've got buildings so tall you can't even see the tops of 'em.

KARL
Really?

EDWARD
Wouldn't lie to you.  And they've got all-you-can-eat buffets.  You can eat a lot, can't you?

KARL
I can.

EDWARD
So why are you wasting your time in a small town?  You're a big man.  You should be in the big city.

Karl smiles, but then it fades.  A certain sad suspicion --

KARL
You're just trying to get me to leave, aren't you?  That's why they sent you here.

EDWARD
What's your name, Giant?

KARL
Karl.

EDWARD
Mine's Edward.  And truthfully, I do want you to leave, Karl.  But I want to leave with you.  
(closer)
You think this town is too small for you, well, it's too small for a man of my ambition.  I can't see staying here a day longer.  

KARL
You don't like it?

EDWARD
I love every square inch of it.  But I can feel the edges closing in on me.  A man's life can only grow to a certain size in a place like this.
(beat)
So what do you say?  Join me?

Karl thinks a moment.  Then --

KARL
Okay.

EDWARD
Okay.

They shake on it.

EDWARD (CONT'D)
Now first, we gotta get you ready for the city.

EXT.  RIVER - DAY

IN A SINGLE SHOT, Karl cuts his hair with hedge clippers, while Edward cuts up a surplus army tent to make him a shirt.

EXT.  MAIN STREET OF ASHTON - DAY

Spirits buoyed by the high school MARCHING BAND, all the good CITIZENS of Ashton are gathered to see off Edward and Karl.  There's a few tears amid the familiar faces.

MAYOR
(loudly, for the crowd)
Edward Bloom, first son of Ashton, it's with a heavy heart we see you go.  But take with you this Key to the City, and know that any time you want to come back, all our doors are open to you.

Edward ducks a bit so the Mayor can put the key around his neck.  The crowd CHEERS.  And with that, Edward and Karl start walking, waving as they go.

Only DON PRICE, smoking on the corner, isn't sad to see Edward go.  He crushes his cigarette under his heel.  He wishes he could crush Edward.

Many of the townfolk come onto the street to hug Edward or shake his hand.  

EDWARD (V.O.)
That afternoon as I left Ashton, everyone seemed to have advice.

VARIOUS TOWNFOLK
Find yourself a nice girl!  Don't trust anyone in Kentucky!  Watch your pride, Edward Bloom!

EDWARD (V.O.)
But there was one person whose counsel I held above all others. 

As the crowd parts, he finds himself face to face with 

THE OLD WOMAN. 

The ruckus slows and quiets, as if a strange spell has been cast.  She motions for Edward to lean down, so she can whisper something to him.  Although we're VERY CLOSE, we can't hear her voice.

EDWARD (V.O.) (CONT'D)
She said that the biggest fish in the river gets that way by never being caught.

The advice only succeeds in confusing Edward.

EDWARD (CONT'D)
(to the Old Woman)
Okay.  Thanks.

Edward and Karl keep walking.  The Old Woman shuffles off, somehow knowing her advice will go unheeded.

KARL
What did she say?

EDWARD
Beats me.

EXT.  ROAD - DAY

We TILT UP from the road to reveal Edward and Karl walking out of Ashton.  Each wears a backpack with all his earthly possessions.

EDWARD (V.O.)
There were two roads out of Ashton, a new one which was paved, and an older one that wasn't.  People didn't use the old road anymore, and it had developed the reputation of being haunted.

Edward and Karl come to a bend, where the paved road veers left and an overgrown dirt road runs straight.  The old road is blocked with signs and warnings of danger.

EDWARD (V.O.) (CONT'D)
Since I had no intention of ever returning to Ashton, this seemed as good a time as any to find out what lay down that old road.

Karl looks at the dirt road, wary.

KARL
You know anyone's who's taken it?

EDWARD
That poet, Norther Winslow did.  He was going to Paris, France.  He must have liked it, because no one ever heard from him again.
(beat)
Tell you what.  You take the other way and I'll cut through here.  Meet you on the far side.

A little paranoid...

KARL
You're not trying to run away?

EDWARD
Just to be sure, you can take my pack.  

Karl perks up, even though it means more for him to carry.

EXT.  DIRT ROAD - DAY 

The road is overgrown, but not altogether creepy.  The sun is still shining, and the birds still CHIRPING.

Spinning the Key to the City, Edward WHISTLES, because it's a day meant for whistling.  

EXT. FURTHER ALONG - ROUGH PATH

The road has narrowed to a rough path.  Spikes of sunlight break through the thick canopy, catching particles in the air.  Still, Edward WHISTLES.

Coming around a bend, his PITCH DROPS as he sees thick, thorny vines growing across the path.  He stops.  For the first time, he realizes the birds have stopped singing.  The forest is dead quiet.

He looks back the way he came.  It's tempting to go back.  It would be easier to go back.  But Edward presses on.

He carefully steps through the thorns.  His trouser legs catch on the barbs.  We can hear the fabric TEAR.

FURTHER ALONG 

A scratched and sweaty Edward waves off various STINGING BUGS flying at him, finally whipping off his hat to swat at them.  Just then a CAWING crow swoops down and grabs the hat right out of his hands.

EDWARD
You stupid sonofa...

He stops his swearing, but grabs a rock and throws it.  The stone ricochets off a tree and into a BEE'S NEST.  The swarm roars out.

Edward high-tails it, each step still precarious.

EXT.  THE DARK FOREST - DAY [LATER]

Edward is bruised, battered and bee-stung.  

A half-broken sign lies in the road.  Edward picks it up.  Reads it:

WARNING!  

JUMPING SPIDERS!

Sure enough, up ahead he sees the path is overgrown with thick cobwebs, heavy from the rain.

EDWARD (V.O.)
There comes a point where a reasonable man will swallow his pride and admit he's made a terrible mistake.  The truth is, I was never a reasonable man.  

Edward tosses the sign and forges ahead, into the spiderwebs.

EDWARD (CONT'D)
And what I recalled of Sunday School was that the more difficult something became, the more rewarding it was in the end.

EXT.  CLEARING / THE ROAD - DAY  

Edward emerges from the forest, brushing the last cobwebs off and shaking the spiders from his shirt.  One is stuck in his sleeve, and he has to dance to get it out.  Even then, he still keeps twitching, convinced another one is left behind.

At his feet, the gravel road has returned, smooth and dusty and comforting. 

Ahead lies a tiny one-street town -- smaller even than Ashton -- with powerlines emerging from the woods to feed it.  Dangling from the line above he sees two dozen pairs of shoes, their laces tied together.

He passes a sign that reads "Welcome To Spectre!"

EXT.  THE TOWN OF SPECTRE   - DAY

It's a main street with stores on each side:  Cole's Pharmacy, Talbot's Five and Dime, Al's Country Store.  Everything is old, but this isn't a ghost town.  In fact, there's a group of about 20 CITIZENS spilling out to see Edward approach.  Most are smiling.  There are even a few tears of joy.

What's more, all of these people are barefoot.

MAN'S VOICE
Friend!

A forty-year old man named BEAMEN comes out of the seed store to greet Edward.  Friendly but a little drunk, he's the closest thing the town has to a mayor.  He's carrying a clipboard.

BEAMEN
Welcome to ya.  What's your name?

EDWARD
Edward Bloom.

Beamen checks the clipboard.  Not finding the name, he flips forward a few pages.  Still looking...

BEAMEN
Bloom like a flower?

EDWARD
Yes.

BEAMEN
Oh.  Here!  Right here.  Edward Bloom.  We weren't expecting you yet.

Still confused...

EDWARD
You were expecting me?

BEAMEN
Not yet.

A helpful woman named MILDRED chimes in:

MILDRED
You must have taken a shortcut.

EDWARD
I did.  It nearly killed me.

BEAMEN
Mmm-hmm.  Life'll do that to you.  And truthfully, the long way _is_ easier, but it's longer.

MILDRED
Much longer.

BEAMEN
And you're here now, and that's what matters.

Beamen's daughter JENNY (8) hides behind her father, peering around to look at the handsome stranger.

EDWARD
What is this place?

BEAMEN
The town of Spectre.  Best kept secret in Alabama.   Says here you're from Ashton, right?  Last person we had from Ashton was Norther Winslow.

EDWARD
The poet?  What ever happened to him?

BEAMEN
He's still here.  Let me buy you a drink.  I'll tell you all about it.  Hell, I'll have him tell you.

EDWARD
No.  I've gotta meet somebody.  I'm already running late.

He didn't mean it as a joke, but for some reason, everyone's laughing.

BEAMEN
Son, I already told you.  You're early.

INT.   BEAMEN'S HOUSE - DAY

Sitting at the kitchen table, Edward takes a second slice of apple pie.  He and Beamen are joined by NORTHER WINSLOW (30), who fancies himself a cultured artist, though he's never left the state.

BEAMEN
Now tell me if that isn't the best pie you ever ate.

EDWARD
It truly is.

UNDER THE TABLE

Young Jenny is stealthily untying the laces on Edward's shoes.

NORTHER WINSLOW
Everything here tastes better.  Even the water is sweet.  Never gets too hot, too cold, too humid.  At night the wind goes through the trees and you'd swear there was a whole symphony out there, playing just for you.

Suddenly, Jenny YANKS OFF Edward's shoes.  She races for the door.

EDWARD
Hey!

He chases after her.

EXT.  TOWN / MAIN STREET - DAY  

As she runs, Jenny ties Edward's laces together.  Reaching the edge of town, she tosses the shoes up and around the power line -- a perfect throw.  There's no way he's ever getting them down.

The gathered citizens of Spectre CHEER for Edward, who is confused and overwhelmed.  The women hug him.  Men shake his hand.

Still focused on his shoes...

EDWARD
Wait!  I need those!

NORTHER WINSLOW
There is no softer ground than town.

MILDRED
That rhymes!

BEAMEN
He is our poet laureate.

The townsfolk continue to congratulate Edward...

EDWARD (V.O.)
Sometimes in a dream, you'll visit places that seem instantly familiar, filled with friends you've never met.  

EXT.  UNDER A TREE - DUSK  

Edward sits with Norther Winslow.  The fireflies are out.  Thousands of them.

EDWARD (V.O.)
A man might travel his entire life and never find a place so inviting.  My journey had scarcely begun, and I had arrived.

Norther hands him his noteboook.

NORTHER WINSLOW
I've been working on this poem for 12 years.

EDWARD
Really.

NORTHER WINSLOW
There's a lot of expectation.  I don't want to disappoint my fans.

A beat.

EDWARD
It's only three lines long.

Norther grabs his notebook back.

NORTHER WINSLOW
This is why you don't show work in progress.

EDWARD
Norther, do you ever regret not making it to Paris?

NORTHER WINSLOW
I can't imagine any place better than here.

EDWARD
You're a poet.  You oughta be able to.  And maybe if you'd seen more, you could.

Norther doesn't answer.  Just goes back to his notebook.

EXT.  BY THE RIVER - NIGHT

By the light of the full moon, Edward soaks his feet in the water, trying to make sense of it all.  The Key to the City dangles around his neck.  

He stares at himself in the reflection.  He smiles.

It's then that a WOMAN emerges at the far side of the river.  No telling where she came from -- she must have been swimming underwater.  We never see her face.

She stands in the river with her bare back to Edward, squeezing the water out of her golden hair, oblivious to his presence.  Edward is breathless.  It's the first woman he's seen in her natural state, and he doesn't dare move lest he frighten her away.

Then he sees the snake.

It's a cottonmouth, has to be.  It leaves a break in the water, its small reptilian head aiming for her flesh.  There's no decision to be made.  On pure instinct, Edward dives in.  He swims as hard as can, 

GRABBING THE SNAKE

just as it's about to strike.

The woman dives back underwater, understandably terrified that a man is coming at her.  

EDWARD
No, it's okay!  I got it.  I got the snake.

As the splashing subsides, Edward looks at what he holds in his hands.  Which isn't a snake at all, but rather a common stick.  And a non-threatening one at that.

While Edward ponders his mistake, he looks around to discover that the Girl in the River is gone.  He never even saw her face.

EDWARD (CONT'D)
Wait!  I'm sorry.  Hello?!

Edward keeps expecting her to surface, somewhere, but she never does.  He stands alone in the river, wondering what tricks his eyes are playing on him.

EXT. BY THE RIVER - NIGHT - CONTINUOUS

A GIRL'S VOICE (O.S.)
There's leeches in there!

Edward looks to the bank, where young Jenny Hill is watching him.

EDWARD
Did you see that woman?

JENNY
What did she look like?

EDWARD
Well, she...uh...

JENNY
Was she nekkid?

Embarrassed to admit it...

EDWARD
Yeah.

JENNY
(matter-of-fact)
It's not a woman, it's a fish.   No one ever catches her.

Given the day he's had so far, Edward isn't inclined to follow up on the issue.  He starts to wade back to the bank.

JENNY (CONT'D)
Fish looks diff'rent to diff'rent people.  My daddy said it looked like the coon dog he had when he was kid, back from the dead.

Edward climbs up onto the shore, completely drenched.  He pulls up his pant legs to reveal three shiny leeches clinging to his skin.

EDWARD
Shoot.

He starts to work pulling them off.

EXT.  PATH BACK TO TOWN - NIGHT

Edward and Jenny walk back.

JENNY
How old are you?

EDWARD
Eighteen.

JENNY
I'm eight.  That means when I'm eighteen, you'll be 28.  And when I'm 28, you'll only be 38.  

EDWARD
(a little wary)
You're pretty good at arithmetic.

JENNY
And when I'm 38, you'll be 48.  And that's not much difference at all.

Eager to get off this subject...

EDWARD
Sure is a lot now, though, huh?

EXT.  MAIN STREET - NIGHT

As Edward and Jenny approach Main Street, they find "downtown" has been transformed.  Lanterns and streamers hang on cables across the street, and a small stage has been built at one end to hold FIDDLERS.

The whole town is there in celebration of its newest citizen, Edward Bloom.  Before he can protest, two WOMEN have grabbed him by the arms, pulling him in to dance with them.

The resulting dance number seems both choreographed and complete chaos.  From FARMER to BAKER'S WIFE, everyone wants to dance with Edward, who finds himself tossed around like a stick caught in a whirlpool.  Still, he's having a blast.

Jenny grabs both his hands, and they spin wildly.

Beamen plucks his LAUGHING daughter away to dance with her.   Then Mildred cuts in to dance with Edward.  It's hard to hear over the MUSIC.

MILDRED
Jenny thinks you're quite a catch.  We all do.

EDWARD
(not hearing)
What?

MILDRED
I said you're quite a catch!

Edward stops dancing.  A beat, then he heads for the edge of the crowd.  Beamen is there, with Jenny on his shoulders.

EDWARD
I have to leave.  Tonight.

BEAMEN
Why?

EDWARD
This town is everything a man could ask for.  And if I were to end up here, I'd consider myself lucky.  But the fact is, I'm not ready to end up anywhere.

BEAMEN
No one's ever left.  

JENNY
How are you gonna make it without your shoes?

EDWARD
I suspect it will hurt a lot.

And with that, Edward walks down Main Street.  The townspeople stop dancing, disbelieving, some shaking their heads.  

Poor Edward Bloom's gone crazy.

BEAMEN
(calling after him)
You won't find a better place!

EDWARD
I don't expect to.

Jenny runs to him.  She'd tackle him if she could.

JENNY
Promise me you'll come back.

EDWARD
I promise.  Someday.  When I'm really supposed to.

It's not good enough, but it will have to do.  Edward keeps walking.

EXT.  THE DARK FOREST - NIGHT

VARIOUS SHOTS:   Edward negotiates the thorns in his bare feet.  It's horrible.  Almost unendurable.

And then it gets worse.

The trees ahead are moving.  At first, it just seems to be the wind blowing the branches, but as we hear the wood CRACKING and GROANING, there's no mistaking it:  they're trying to block him.

Snake-like WHITE ROOTS shoot out of the ground, grabbing for his ankles.  He leaps up, kicking off one tree trunk to grab another one's branches.  He swings off, lands and rolls.  Now all the trees are moving to block him, their dark shapes towering over him in the flashes of LIGHTNING.

EDWARD (V.O.)
As difficult as it was to reach Spectre, I was fated to get there eventually.  After all, no man can avoid reaching the end of his life.

As he ducks under branches, the chain holding the Key to the City gets caught.  He's almost strangled, but the chain finally breaks.  The silver key disappears into the mud.

Scrambling forward, he looks for a way out.  But the trees have encircled him, their spiky crowns bending down to crush him. 

He SCREAMS up at the night, until his breath is gone.

EDWARD (V.O.) (CONT'D)
And then I realized, this wasn't the end of my life.

With a sudden calm...

EDWARD (CONT'D)
(aloud)
This isn't how I die.

Another lightning FLASH, and suddenly the trees are back where they've always been.  Edward is lying shoeless and torn in a muddy puddle, staring up at the rain.  And LAUGHING.

EXT.  THE ROAD - DAY

His bare foot steps onto asphalt.

A DEEP VOICE
Friend!

Edward turns to see 

KARL 

to his right, coming down the larger, paved road.

KARL
What happened to your shoes?

Edward looks down at his muddy, bloody feet.

EDWARD
They got ahead of me.

With that, the men start walking down the larger road.  

CROSSFADE TO:

INT.  DINING ROOM - NIGHT 

Edward and Will sit at opposite ends of the table, with Sandra and Josephine in the middle.  Although Edward has a small plate of food in front of him, he hasn't touched it.  He's exhausted from the trip downstairs, but determined to maintain the family dinner ritual.

The other three eat awkwardly, each CLINK and SCRAPE of a knife or fork resonating.  Will finally breaks the silence.

WILL
I don't know if you've seen it, but Josephine has some photos in the most recent Newsweek.

SANDRA
Really!  That's wonderful.

JOSEPHINE
I spent a week in Morocco for the story.  It was incredible.

SANDRA
We'll have to pick up a copy.

A beat.  As Will scoops out another serving of potatoes, Edward suddenly speaks:

EDWARD
I don't know if you're aware of this, Josephine, but African parrots, in their native home of the Congo -- they speak only French.

All three stop to listen.

JOSEPHINE
(amused)
Really.

EDWARD
You're lucky to get four words out of them in English.  But if you were to walk through the jungle, you'd hear them speaking the most elaborate French.  Those parrots talk about everything:  politics, movies, fashion -- everything but religion.

Taking the bait...

WILL
Why not religion, Dad?

EDWARD
It's rude to talk about religion.  You never know who you're going to offend.

A beat.

WILL
Josephine actually went to the Congo last year.

EDWARD
Oh, so you know.

INT.  GROCERY STORE - NIGHT

Will shakes a shopping cart free from the pile-up while his mother checks her list.

AT THE PRODUCE SECTION

Sandra starts to bag string beans.

WILL
Mom, would you say you understand Dad?

SANDRA
Of course.

WILL
What I mean is, do you really know what's going on in his head?

SANDRA
Yes.

WILL
How is that possible?  I mean, you try to ask him a question and suddenly it's another one of his stories.
(decidedly)
You can't honestly say you know him.

SANDRA
Yes, Will, I do.  And don't presume things you don't know.

She's more amused than annoyed, but Will is entering dangerous territory.

SANDRA (CONT'D)
Would you say you understand Josephine?

WILL
Yes.  But that's a different...

SANDRA
No it's not.  It's exactly the same.  Your father and I met, we dated, and we married -- we chose each other -- because we understood each other on some fundamental level.  Just the same as you two.  

She moves on to the carrots.

WILL
Josephine and I have a lot in common.

SANDRA
Yes, you both think William Bloom is a very smart man.
(beat)
The problem is, you only see me as your mother, and not as someone's wife.  And I've been his wife longer than I've been your mother.  You can't discount that.

WILL
True.  But I've known him my whole life, and I don't feel like I know him at all.  Or ever will.

With a look, Sandra acknowledges the stakes.

SANDRA
I know it's not easy.  Just remember, he didn't choose to be your father and you didn't choose to be his son.  You just ended up together.  You could pick numbers out of a dark bag and it'd be just the same.  If you ask me, it's a wonder parents and children can stand each other at all.

WILL
But I understand you, Mom.  I always have.

SANDRA
Well, clearly you don't.  But I'm not the mystery you're trying to solve right now.

INT.  AT THE CHECKOUT - NIGHT

Reaching the CASHIER, Sandra hands over her coupons.  Will is approaching with a Newsweek magazine.

Two checkstands over, an ATTRACTIVE BLONDE WOMAN in her 50's is getting her change.  Though she's Sandra's generation, she carries herself like a much younger woman, with blue jeans and sneakers.

She accidentally makes eye contact with Will as he passes.  We HOLD ON the woman, who tracks Will as he reaches Sandra.  It's hard to read her reaction:  does she recognize him, or just find him attractive? 

Will notices the gaze.  The woman turns away.

Will racks his brain -- does he know this woman?

SANDRA
Before I forget, your father has papers in the basement I'd like you to go through.  I wouldn't know what's important.

WILL
(distracted)
Mom, do you know who that is?  Blonde hair.

Sandra looks.  After a beat, the Blonde Woman turns again, semi-casually.  Noticing that both Will and Sandra are looking, she smiles a little before taking her cart to leave.

SANDRA
(no idea)
Was she one of your teachers?

WILL
No.  But it's weird.  She seemed to recognize me.

SANDRA
(to the cashier)
Do you know who that is?

The Cashier turns to look.  He can only get a profile as the woman leaves.

CASHIER
Never seen her before.  Pretty, though.

INT.  GUEST BEDROOM - NIGHT

A portable fan quietly WHIRRS in the corner.  Turned low, the RADIO on the nightstand is playing a call-in AM sports show, just a wash of background chatter.  Edward lies asleep on his back.  

At the window, Josephine quietly lowers the shade.  She reaches over Edward to switch off the radio.  He stirs from the silence -- he wasn't fully asleep -- and sees Josephine stretched over him.

EDWARD
(playfully lecherous)
Hello.

She smiles.

JOSEPHINE
Hi.  How are you feeling?

EDWARD
I was dreaming.

JOSEPHINE
What were you dreaming about?

He tries to recollect, but it's already gone.  Josephine motions, is it okay for her to sit on the bed?  He nods.

EDWARD
I don't usually remember unless they're especially portentous.  You know what that word means, portentous?

She shakes her head.

EDWARD (CONT'D)
Means when you dream about something that's going to happen.  
(beat, gathering)
Like one night, I had a dream where this crow came and told me, "Your Aunt is going to die."  I was so scared I woke up my parents.  They told me it was just a dream, to go back to bed.  But the next morning, my Aunt Stacy was dead.

JOSEPHINE
That's terrible.

EDWARD
Terrible for her, but think about me, young boy with that kind of power.  Wasn't three weeks later that the crow came back to me in a dream and said, "Your Grampa is going to die."  Well, I ran right back to my parents.  My father said, no, Gramps is fine, but I could see there was trepidation.  And true enough, that next morning my Grampa was dead. 

He sits up a bit in bed, his strength returning.

EDWARD (CONT'D)
For the next couple weeks, I didn't have another dream.  Until one night the crow came back and said, "Your Daddy is going to die."  
(beat)
Well, I didn't know what to do.  But finally I told my father.  And he said not to worry, but I could tell he was rattled.  That next day, he wasn't himself, always looking around, waiting for something to drop on his head.  Because the crow didn't tell how it was going to happen, just those words:  your Daddy is going to die.  Well, he went into town early and was gone for a long time.  And when he finally came back, he looked terrible, like he was waiting for the axe to fall all day.  He said to my mother, "Good God.  I just had the worst day of my life."
(beat)
"You think _you've_ had a bad day," she said.  "This morning the milkman dropped dead on the porch!"

Josephine smiles, a half-laugh, which gets him smiling too.  

A long beat.  Then, deadpan...

EDWARD (CONT'D)
Because see, my mother was banging the milkman.

JOSEPHINE
No, I understand.

EDWARD
He was slipping her a little extra cream.

She nods, a bit more of a laugh.

EDWARD (CONT'D)
He was filling her basket.  He was making deliveries around back.  

As Edward continues, she can't help but laugh harder, especially as the metaphors get more vulgar.

EDWARD (CONT'D)
He was buttering her rolls.  Pumping her churn.  Splashing milk in her box.

JOSEPHINE
Stop.

EDWARD
They were squeezing the cheese.  Clanking the bottles.  Licking the popsicle.

She's starting to cry from laughing. 

EDWARD (CONT'D)
Cracking the eggs and making an omelet.

With that, he stops.  She regains her composure.

EDWARD (CONT'D)
Spooning the sherbet.

JOSEPHINE
(interrupting)
Can I take your picture? 

EDWARD
You don't need a picture.  Just look up handsome in the dictionary.

JOSEPHINE
Please?

He rolls his eyes, why not.

Josephine leaves, heading down the hall to get her camera.  We STAY WITH Edward in bed.

JOSEPHINE (O.S.) (CONT'D)
I have photos from the wedding to show you.  There's a great one of you and my father.  I had an extra print made.

Edward grimaces, a flash of pain.  Around others, he's hiding how much it hurts, but alone we can see how bad it is.

He controls his breathing, trying to push through it.

JOSEPHINE (O.S.) (CONT'D)
I want to see pictures of your wedding.  I've never seen any.

She returns with her camera.  Edward smiles, doing a good job masking the pain.

EDWARD
That's because we didn't have a wedding.  Your mother-in-law was never supposed to marry me.  She was engaged to somebody else.

JOSEPHINE
(loading film)
I never knew.

EDWARD
Will never told you that?
(she shakes her head)
Probably just as well.  He would have told it wrong anyway.  All the facts and none of the flavor.

JOSEPHINE
Oh, so this is a tall tale?

EDWARD
Well, it's not a short one.

A devilish smile.  Pushing past Edward, we settle on the whirling fan.

MATCH CUT TO:

A SPINNING PINWHEEL

held by a LITTLE BOY.  He's slumped over his FATHER's shoulder, being carried towards a big-top tent.  We are...

EXT.  OLYMPIA CIRCUS - NIGHT

...where the second-rate carnival is parked for the moment in an Alabama field.  To the left, we spot Edward, 20-ish, halfway through a bag of peanuts.  He's still carrying the backpack we saw earlier, and scratched up from his trip through Spectre.

EDWARD (V.O.)
I had just left Ashton, and was on my way to discover my destiny.  Not knowing what that would be exactly, I explored every opportunity that presented itself. 

Joining the crowd, he heads into the big-top.

INT.  BIG TOP - NIGHT

A troupe of STILT-WALKING FIREBREATHERS finishes their act to tremendous APPLAUSE.  

As the performers clear away, the circus' owner-and-ringmaster AMOS CALLOWAY (50) approaches the stands.  He may only be four feet tall, but Amos has a titanic presence.

AMOS
Ladies and Gentlemen, you may think you've seen the _unusual_.  You may think you've seen the _bizarre_.  But I've travelled to the five corners of the world, and let me tell you, I've never seen anything like this.

From behind Amos, CARNIES start rolling a massive ball towards the crowd.

AMOS (CONT'D)
When I found this man, he was picking oranges in Florida.  His fellow workers called him El Penumbra -- The Shadow -- because when you were working beside him, he blocked out the daylight.  He could take a whole tree in his hands and shake off the fruit.  I had to pay his crew boss $10,000 just so I could take him with me.

Amos comes up to a MIDDLE-AGED WOMAN in the first row, a quieter moment.

AMOS (CONT'D)
Not to alarm you, Ma'am.  But if this man wanted to, he could crush your head between his toes.
(she trembles)
But he won't.
(a long beat)
He's not going to hurt her, folks, because he's our own Gentle Giant.  Ladies and Gentlemen, I give you Colossus!

The carnies back away from the ball as a deep DRUM ROLL begins.  A moment, then the ball starts to bulge from inside.

A foot suddenly bursts out from within.  GASPS from the crowd.  That foot is massive.  In the stands, Edward looks closer.  Intrigued.

As the drum beat intensifies, a second foot breaks out.  Followed by hands.  Shoulders.  Finally, the head.  This is COLOSSUS.

From a very LOW ANGLE, we look up to see just how massive he is.  He seems to fill the Heavens.  With his shaved head and giant club, he seems more ogre than man.   

In the bandstands, a YOUNG BOY's jaw drops in awe.  Colossus walks down the row, letting the crowd get a better look at him.  Some reach out to touch him, disbelieving.  A tight spotlight follows him, revealing faces in the crowd.  

Colossus passes Edward, who seems unimpressed.  He leans with the spotlight, WHISTLING to get the big man's attention.  

He points to the edge of the stands, where his friend is sitting on the dirt --

KARL THE GIANT

stands up, so big the spotlight has to widen just to hold him.  He's a good foot taller than Colossus.  There's a GASP from the crowd, along with nervous anticipation -- what will happen next?

ANGLE ON Amos, stunned, megaphone dangling.

ANGLE ON Colossus, realizing the gig is up.  With a resigned shrug, he rests his club on his shoulder and walks away into the shadows.

CUT TO:

INT.  BIG-TOP - NIGHT / LATER

As the stands empty, Edward and Karl talk to Amos.

AMOS
What's his name?  Does he talk?  It's not important.

KARL
Karl.

AMOS
Tell me Karl, have you ever heard of the term  "involuntary servitude?"

Karl shakes his head.

AMOS (CONT'D)
"Unconscionable contract?"

Nope.

AMOS (CONT'D)
Great, great.  That's fantastic.

EDWARD (V.O.)
It was on that night Karl met his destiny.  And I met mine.  Almost.

INT. BIG TOP - NIGHT - CONTINUOUS

As Amos pulls Karl aside to give him the hard sell, Edward notices a BEAUTIFUL YOUNG WOMAN (16) leaving with her family.  She's wearing a blue dress and hat.  For no good reason, she looks back at Edward.  

The two make eye contact.  And as they do, all motion FREEZES.  

A fiery baton remains mid-twirl, flames locked in place.  A spilled box of popcorn hangs in mid-air, each kernel like a snowflake.  Even the elephant is mid-poop.

Only Edward is free to move, winding his way between the frozen bodies, ducking underneath arms to get closer and closer to this woman.

EDWARD (V.O.)(CONT'D) 
They say when you meet the love of your life, time stops.  And that's true.  What they don't tell you, is that once time starts again, it moves extra fast to catch up.

Suddenly, everything RUSHES.  The crowd becomes a blur, and the young woman is lost in its wake.  Now it's Edward who's frozen, helpless in time.

EXT.  DIRT PARKING LOT - NIGHT

Edward checks in windows as cars pull out, searching for his fated love.  Not finding her, he becomes more frantic, running down the rows.

CROSSFADE TO:

THE EMPTY LOT

Colossus is thumbing for a ride.  The last pickup truck stops and lets him climb in back.

As the truck pulls out, it passes a dejected Edward.  He'll never find that girl, the love of his life.

INT.  BIG-TOP - NIGHT

Amos leans over so Karl can sign a contract on his back.  He spots Edward walking back into the tent.

AMOS
Hey kid!  Your friend just made himself a star.

EDWARD
That's great.

Amos hands off the contract to a CLOWN.

AMOS
(introducing)
My attorney, Mr. Soggybottom.

EDWARD
Good to meet you.

Mr. Soggybottom HONKS his horn, then waddles off.

AMOS
What's the matter with you, kid?  I haven't seen a customer so depressed since the elephant sat on that farmer's wife.
(beat)
Get it?  "Depressed?"

Karl chuckles.

AMOS (CONT'D)
See!  The big guy likes it.

EDWARD
I just saw the woman I'm going to marry, I know it.  But then I lost her.

AMOS
Tough break.  Most men have to get married before they lose their wives.

EDWARD
(with absolute conviction)
I'm going to spend the rest of my life looking for her.  That or die alone.

AMOS
Jesus, kid.
(realizing)
Let me guess.  Real pretty, blonde hair, blue hat?

EDWARD
Yes!

AMOS
I know her uncle.  Friends of the family.

EDWARD
Who is she?  Where does she live?

AMOS
Kid.  Don't waste your time.  She's out of your league.

As Amos starts to walk away, Edward hurries to catch up with him.  Karl follows as well.

EDWARD
What do you mean?  You don't even know me.

AMOS
Sure I do.  You were hot shit back in Hickville, but here in the real world, you got squat. You don't have a plan.  You don't have a job.  You don't have anything but the clothes on your back.

EDWARD
I've got a whole backpack _full_ of clothes!

He points to the bleachers, where no backpack is to be found.

EDWARD (CONT'D)
(realizing)
Someone stole my backpack.

AMOS
Kid, you were a big fish in a small pond.  This here is the ocean, and you're drowning.  Take my advice and go back to Puddleville.  You'll be happy there.

Getting in front of Amos, Edward stops him.

EDWARD
Wait.  You said I don't have a plan.  I do.  I'm going to find that girl and marry her and spend the rest of my life with her.  

Amos smiles, amused.

EDWARD (CONT'D)
I don't have a job, but I would have a job if you gave me one.  And I may not have much, but I have more determination than any man you're ever going to meet.

AMOS
Sorry, kid.  I don't do charity.

EDWARD
I'll work night and day, and you won't have to pay me.  You just have to tell me who she is.

Amos takes a long look at him.  Ultimately, there's no way he can say no.  He shrugs.  What the hell.

AMOS
Every month you work for me, I'll tell you one thing about her.  That's my final offer.

Edward shakes Amos's hand before he can retract the offer.  We move into a MONTAGE:

INT.  BIG TOP CENTER RING - NIGHT

CLOSE ON Edward, smiling nervously.  His head is tilted to the side, and as we PULL BACK, we see why:  he's holding it in a MASSIVE LION's open mouth.  The beast's sharp teeth are just poking his skin.  If the lion so much as flinches, Edward is dead.

The CROWD applauds, which makes the lion antsy.  Which makes Edward antsier.

EDWARD (V.O.)
From that moment on, I did everything Mr. Calloway asked, and a lot of things he didn't.  I'd go three days without stopping to eat, and four days without sleeping.

EXT.  THE HYDRA - DAY

His eyes droopy from lack of sleep, Edward mans the whirling amusement park ride.

EDWARD (V.O.)
The only thing that kept me going was the promise of meeting the girl who would be my wife.

Nodding off, Edward falls backward, into the path of the spinning arms.  One of the Hydra cars hits him square in the gut, throwing him up and away, sailing 200 feet through the air.

EXT.  FIELD - DAY  

Edward chases a costumed pig, tripping over tent cords, falling in the mud.

His hunt leads him through the back of a tent, where he's unwittingly stepped in front of a line of motorized birds.  To the left, CUSTOMERS are shooting with rifles.  He dodges four SHOTS that knock down the birds around him.

He catches his breath, lucky.

Then a half-blind OLD WOMAN pulls her trigger, hitting him in the shoulder.

EXT.  BEHIND A TENT - DAY

Karl the Giant bandages Edward's arm as well as he can.  Amos is walking past.

EDWARD
Mr. Calloway!  It's been a month today.

Amos stops, looks at the young man.  Finally...

AMOS
This girl, the love of your life.  Her favorite flower is daffodils.

He walks away.  We PUSH IN on Edward, enraptured by the concept.

EDWARD
Daffodils.  
(to Karl)
Daffodils!

INT.  STABLES - DAY

Edward shovels shit in the nastiest stables you've ever seen.  But all he can think about is...

EDWARD
(to himself)
Daffodils!

The wonder of it.  He goes back to shoveling, a smile on his face.

EDWARD (V.O.)(CONT'D)
True to his word, every month Amos would tell me something new about the woman of my dreams.

INT.  A DARK PLACE - NIGHT  

CLOSE ON Edward, lost in quiet reverie, pondering his latest bit of information.

EDWARD
College!  She's going to college!

A sudden EXPLOSION as Edward is shot...

INT.  BIG TOP - NIGHT [CONTINUOUS]

...out of a giant cannon.

INT.  STABLES - NIGHT

Under a full moon, Edward feeds the animals.  

EDWARD
(to himself)
Music!  She likes music.  I like music too!

EDWARD (V.O.)
Over the months, I learned a lot about the woman I was going to marry, but not her name, and not where to find her.  That time had come.  I couldn't wait any longer.

EXT.  AMOS CALLOWAY'S TRAILER - NIGHT

Under a full moon, Edward walks up to the battered camper, and is about to knock when he notices it's rocking.  A lot.  Not just that, there's MOANING coming from inside.

But Edward KNOCKS anyway.

EDWARD
Mr. Calloway!  It's Edward Bloom.  I need to talk to you.

Suddenly, the rocking and moaning stop.  A beat, then the door handle begins to RATTLE.  It seems to be stuck.

Edward turns the knob.

Suddenly, the door BURSTS OPEN.  Edward is knocked down by a massive black dog, biggest you've ever seen.  It has green glowing eyes and a lick of fire for a tongue.

Edward wrestles with the beast, its mouth snapping at his throat.  Blocking with an arm, Edward tries to push himself free, but the creature's hands -- it has hands instead of paws -- hold on tight.

Entwined, they roll across the dirt.  The other nearby CARNIES scatter for cover.   Mr. Soggybottom pulls a revolver out of his clown suit.  Loads a silver bullet.

Edward finally succeeds in throwing the beast off.  He rolls to his feet.  

The hell hound squares back on its haunches, GROWLING, ready for another leap.  Mr. Soggybottom sheds a clown tear, aiming the revolver at the dog.

At the last moment...

EDWARD (CONT'D)
No, wait!

Edward moves just as Mr. Soggybottom FIRES.  The bullet catches Edward in the shoulder, knocking him down.

The carnies GASP.

Licking its chops, the dog approaches the helpless Edward, who feels the ground around him, looking for some kind of weapon.  He finds only a small stick.  He waves it at the dog, ready to strike it.

Like magic, the dog's whole demeanor changes.  It bounces excitedly, ready to play fetch.

Seeing an opportunity, Edward throws the stick as far as he can.  The dog bounds after it, 

SMASHING DOWN THREE CARS.   

It returns a beat later with the flaming stick, which it drops at Edward's feet.  Its tail whips back and forth.

EDWARD (V.O.) (CONT'D)
It was that night I discovered that most things you consider evil or wicked are simply lonely, and lacking in the social niceties.

Edward throws the stick again.  The dog takes off in a new direction.

TRANSITION TO:

EXT.  FIELD - PRE-DAWN

Exhausted from playing fetch all night, Edward throws the stick into the woods.  The still-spry dog goes after it.  It's gone for a long time, long enough that Edward becomes concerned.

He follows it into the woods.

INT.  WOODS - DAWN

Amos Calloway stands up behind a bush, buck naked and hairy.  He still has the stick in his mouth, which he takes out as Edward approaches.

AMOS
Didn't kill anything, did I?

EDWARD
A few rabbits, but I think one of them was already dead.

AMOS
That would explain the indigestion.

Edward tosses him his jacket to cover his privates.

AMOS (CONT'D)
I was wrong about you kid.  You may not have much, but what you got, you got a lot of.  You could get any girl.

EDWARD
There's only one I want.

A beat.

AMOS
Her name is Sandra Templeton.  She's going to Auburn.  The semester's almost over, so you better hurry.

EDWARD
Thank you.

AMOS
Good luck, kid.

Edward walks away.  Then starts running.  He has to get there as soon as possible.

Amos sits down and scratches his ear with his foot.

EXT.  BIG TOP - DAY  

Edward shakes Karl's giant hand.  They hug.

EDWARD (V.O.)
After saying my goodbyes, I hopped three trains to get to Auburn that afternoon.

EXT.  AUBURN UNIVERSITY - DAY

We DESCEND ON the main quad, to find Edward Bloom dunking his head in the fountain.

He changes out of his grubby shirt into a new one, just out of the package.  It's the mid-1960's, but by the conservative dress of the passing STUDENTS, it could be any era. 

EXT.  SORORITY HOUSE - DAY

Edward stands with a bouquet of daffodils in front of a half-open door.  Through the crack we can see the edge of a YOUNG WOMAN, talking in hushed tones with another girl we can't see. 

Finally, a decision is reached.  The door opens to reveal the woman of Edward's dreams, Sandra Kay Templeton.  She's effortlessly beautiful, pure and simple as sunlight.

He can't believe he's finally reached her.  He half-laughs, nervous.  That makes her laugh, not sure what's going on.

EDWARD
You don't know me, but my name is Edward Bloom and I am in love with you.  I've spent the last three years working to find out who you are.  I've been shot and stabbed and trampled a few times, had my ribs broken twice, but it's all worth it to see you here, now, and to finally get to talk to you.  Because I am destined to marry you.  I knew that from the first moment I saw you at the circus.  And I know it now more than ever.

ON SANDRA, overwhelmed.  All she can finally think of to say is...

SANDRA
I'm sorry.

EDWARD
Don't need to apologize to me.  I mean, I'm the luckiest person you're going to find today...

She puts her hand on the door frame.  On her left ring finger, we see a diamond.

SANDRA
No I'm sorry, I...I'm engaged to be married.

ON EDWARD as his heart falls 20 floors.  He tries to suppress the reaction, put on a brave front.

EDWARD
Oh.

SANDRA
But you're wrong.  I _do_ know you, at least by reputation.  Edward Bloom from Ashton.  See, I'm actually engaged to a boy from Ashton.  Don Price.  He was a few years older than you.

FLASHCUTS TO:

EXT. CREEPY OLD HOUSE - THE GATE - NIGHT  

Young Don Price shines his flashlight on Edward.

VARIOUS H.S. ATHLETIC COMPETITIONS

Recapping earlier football, baseball and basketball highlights, we find Edward beats Don every time.

THE STREET CORNER / ASHTON PARADE

A smoking Don Price crushes his cigarette as Edward leaves town.

BACK TO:

EXT/INT. SORORITY HOUSE - THE DOORWAY

Edward is dumbstruck.  With all the strength he can muster...

EDWARD
Well.  Congratulations.  I'm sorry to have bothered you.

He turns and walks down the front steps. 

She stays in the doorway for a few beats, feeling genuinely horrible for what's happened.  But eventually she goes back inside.  We hear GIGGLES from inside as her sorority sisters get to the bottom of this.

SANDRA
Stop it.  It's not funny.  That poor boy.

We LEAD Edward as he walks away, tears just starting to form.  

EDWARD (V.O.)
Fate has a cruel way of circling around on you.  After all this work to leave Ashton, the girl I loved was now engaged to one of its biggest jerks.

He EXITS FRAME, leaving only the sorority house in the background.

EDWARD (V.O.) (CONT'D)
There's a time when a man needs to fight, and a time when he needs to accept that his destiny is lost, that the ship has sailed, and that only a fool would continue.

A beat.  Edward steps back INTO FRAME, looking at the sorority house.

EDWARD (V.O.) (CONT'D)
The truth is, I've always been a fool.

We CIRCLE as he shouts:

EDWARD (CONT'D)
Sandra Templeton!  I love you!  And I am going to marry you!

INT.  SORORITY HOUSE FOYER - DAY

Sandra and her SISTERS peer out through the curtains.  Is this guy crazy?

INT.  LECTURE HALL - DAY

The tweedy ECONOMICS PROFESSOR continues his explanation.  Sandra isn't paying a lot of attention.

He switches on the overhead projector without looking at it.  There's a TITTER from the STUDENTS, but he doesn't notice.

A classmate nudges Sandra, who looks up.  Written on the projector is "I Love Sandra Templeton."  She's horrified and excited at the same time.   The professor finally notices what's written there.

EXT.  QUAD - DAY

Walking with her books, Sandra shakes her head, disbelieving.  We look up to the blue sky, where a giant sky-written heart floats in the wind.

INT.  SANDRA'S BEDROOM - [THE NEXT] MORNING

At her Sisters' prompting, a just-woken Sandra looks out the second-story window to find the lawn filled with 

TEN THOUSAND DAFFODILS.

Edward stands amid the sea of flowers.  He's waited there six hours.

EXT.  SORORITY HOUSE - DAY

Sandra walks out to him.  She's smiling, confused, joyful and scared.  All down Greek Street, STUDENTS are coming out to see the display.

SANDRA
Daffodils?

EDWARD
They're your favorite flower.

SANDRA
How did you get so many?

EDWARD
I called everywhere in five states and explained this was the only way I could get my wife to marry me.

Out of nowhere, a tear drops down Sandra's cheek.  She wipes it off.

SANDRA
You don't even know me.

EDWARD
I have the rest of my life to find out.

From down the street...

A MAN'S VOICE
Sandra!

SANDRA
It's Don.  Promise me you won't hurt him.

EDWARD
If that's what you want, I swear to it.

The adult DON PRICE arrives.  He's 230 pounds of football-playing, Skynard-loving, fraternity-proud muscle.  And he's pissed.

A gang of his BROTHERS walk behind him.

DON PRICE
Bloom!

EDWARD
Don.

DON PRICE
What the hell are you doing?  This is my girl.  Mine!

EDWARD
I didn't know she belonged to anybody.

Don Price decks him, knocking him down.  Edward gets right back up, but makes no move to defend himself.

Unfazed, Don slugs him again.

SANDRA
Stop it!

DON PRICE
(ignoring)
What the matter, Bloom?  Too scared to fight back?

EDWARD
I promised I wouldn't.

A beat.  Don shrugs, fine.  Then proceeds to kick Edward's ass nine ways to Sunday.

EDWARD (V.O.) (CONT'D)
While I took the beating of a lifetime, it was Don Price who was ultimately defeated.

As the ass-whupping continues, we

INTERCUT WITH:

INT.  FRATERNITY HOUSE BATHROOM - DAY [FLASHFORWARD]

Sitting on the can, Don Price pinches a loaf while reading the new Playboy.

EDWARD (V.O.)
All the physical activity had worsened a congenital valve defect.  Put simply, his heart wasn't strong enough.

Don Price squeezes down hard, trying to shit the unshittable.  Suddenly, he grasps his chest and collapses face-first on the tile.

MATCH CUT TO:

EXT.  WITCH'S HOUSE / GATE - NIGHT [FLASHBACK]

The same image of Don's dead face on the tile is reflected in The Eye.  

RETURNING BACK TO:

EXT.  THE SORORITY HOUSE - DAY

The thrashing continues.   Edward somehow fights his way back to his feet, ready to be knocked down again.

SANDRA
Don!

Don is about to slug Edward again when he turns.  

Sandra pulls off her engagement ring.  There's an audible AHH! from her sisters, and an OHH! from Don's brothers.

SANDRA (CONT'D)
I will never marry you.

A beat.  Don stands stunned, his mind reeling.

Edward, whose eyes are swollen almost shut, keeps waiting for the next punch.  Where is it?  What's going on?

DON PRICE
What.  You love this guy?

SANDRA
He's almost a stranger and I prefer him to you.

She hands him the ring.  Another beat, then Don storms off.  But not before decking Edward one last time.  

Sandra leans over Edward's broken body.  His head lies on the daffodils.

SANDRA (CONT'D)
How can I convince you to stop?

EDWARD
Go out with me.

He smiles, his teeth bloody.

SANDRA
Okay.

As the crowd of students APPLAUDS and CHEERS, we CRANE UP above the flowered battlefield.

EDWARD (V.O.)
As it turned out, Sandra was able to keep her same date at the chapel.  Only the groom had changed.

As the MUSIC reaches a crescendo, we suddenly...

CUT TO:

INT.  GUEST ROOM - NIGHT [PRESENT]

JOSEPHINE
I thought you said you didn't have a church wedding.

EDWARD
Well, we were all set to, but there was a complication.

He reaches for his glass of water, but Josephine already has it for him.  She watches him while he slowly drinks the entire glass, thirstier than he imagined.  While he's drinking, we...

CUT TO:

INT.  UPSTAIRS HALLWAY - NIGHT [CONTINUOUS]

Will, back from the grocery store, reaches the top of the stairs.  He hears voices coming from the bedroom.

JOSEPHINE (O.S.)
Is it the medicine that's making you thirsty?

EDWARD (O.S.)
Truth is, I've been thirsty my whole life.  Never really known why.

Will quietly approaches the door, not exactly sneaking, but not exactly announcing his presence.  The door is open a few inches, letting him look in on his father and his wife.

INTERCUT HALLWAY / BEDROOM

EDWARD (CONT'D)
There was one time when I was eleven...

JOSEPHINE
(gently)
You were talking about your wedding.

EDWARD
I didn't forget.  I was just working on a tangent.  See, most men, they'll tell a story straight through, and it won't be complicated, but it won't be interesting either.

JOSEPHINE
I like your stories.

EDWARD
And I like you.  

He doesn't let the moment linger with undue sentimentality.  There's a story to be told.

EDWARD (CONT'D)
Now.  The thing about working for a circus is you don't have a regular address, and after three years I had a lot of undelivered mail. 

In the hallway, Will shifts to a new position, letting himself listen to the story one more time.

EDWARD  (CONT'D)
During the four weeks I was in the hospital, the postmaster finally caught up with me.

INT.  HOSPITAL - DAY

Bruised and bandaged, Edward sorts through a big bag of mail with help from Sandra.  He rips open an official-looking letter.  Reading it, his face drops.

FLUTE and DRUM, music rising to a military cadence.

EDWARD (V.O.)
It turned out that while my heart belonged to Sandra, the rest of my body belonged to the U.S. Government.

INT.  ARMY AIRPLANE - NIGHT

With a buzz cut and paratrooper gear, Edward squats with a dozen other SOLDIERS.  The noise of the ENGINES is deafening, but Edward is engrossed in an Asian phrasebook.

EDWARD (V.O.)
A hitch in the Army was up to three years at that point, and having waited three years just to meet Sandra, I knew I couldn't survive being away from her that long.  So I took every hazardous assignment I could find, with the hope of getting my time down to less than a year.

The JUMP LEADER yells...

JUMP LEADER
GO!  GO!  GO!

One by one the men jump out, their chutes clipped to a main line.  When his time comes, Edward leaps...

...but he's stuck.  His cord is caught up in the assembly.

He twists and struggles, trying to free himself.  Looking down, he can see the white parachutes disappearing into the darkness.  They're already long gone.

Digging a knife out of his pocket, Edward gets to work cutting through the cable.  It finally POPS.  Edward jumps from the plane.

EXT.  OUTSIDE STAGE - NIGHT

A THOUSAND CHINESE SOLDIERS sit, bored, watching the equivalent of a U.S.O. show.  

A CHINESE VENTRILOQUIST is on stage with his Communist puppet.  We have no idea what they're saying to each other, but every act is fundamentally the same.

The EMCEE comes on to usher him off the stage before he's finished.  The Ventriloquist protests, but finally gives in.  The Emcee makes a "shoot him in the neck" motion to one of the ARMED GUARDS off-stage.

EXT.  HIGH ABOVE THE STAGE - NIGHT

We LOOK DOWN with Edward, who is drifting right for the stage.  He can't steer.  He's helpless.  

But then, a BLAST of fireworks from the sides of the stage.  The lights go out as a DRUM ROLL begins.  It's just enough cover for Edward to remain unseen.

He lands with a CLANG on the lighting catwalk above the stage.  He barely grabs on, disconnecting his chute just as the curtain goes up.  Edward looks out at the sea of excited soldiers.  Every one of them would kill him.  He's the legless cricket left on the anthill.

EXT. ON STAGE

The curtain rises to reveal PING (27) at a microphone.  She's as gorgeous a woman as you'll ever see.

She stands with her hips turned in profile.  Her body is a knockout, dress cut to reveal skin.  The soldiers are on their feet, WHISTLING and HOLLERING.

UP ON THE CATWALK, Edward is surprised by an ENEMY SOLDIER.  The two men begin to SCUFFLE.  

MUSIC starts, a vampy torch song.  Ping sings melody while an off-stage voice carries perfect harmony.

PING
*Sometimes a girl can feel so alone
Without a lover to call her own.
Sometimes it's so bad, she wants to explode.
Wants to grab the first man she sees and tear off his clothes.*

A ROAR from the soldiers.  She knows what they want.

Still fighting, Edward jumps for a pole on the far side of the catwalk, sliding down it to end up 

BACKSTAGE.

His determined opponent follows him down.

PING (CONT'D)
*But she won't.
No, she can't.
She needs a special **special** different unusual man.
Because that girl,
Who looks like me,
She has wants, but she has needs.*

PING  (CONT'D)
(speaking)
Any of you got needs?

The soldiers ROAR LOUDER, STOMPING on the bleachers.

Backstage, the two men are still fighting.

PING  (CONT'D)
(chorus)
*I've had twice the adventure,
Cried double the tears.
Two times the bad times in half the years.
I need a strong man, because I've got
Twice the love to give.*

For the first time, Ping turns, and now we see why she was standing in profile.  Ping is one-half of 

SIAMESE TWINS.

Her identical twin is JING, who's been singing harmony all this time.  They are two separate women who join at the waist, one set of perfect legs beneath them.

Edward sees the twins from behind, does a double-take.  It costs him a punch to the jaw.

PING (CONT'D)
Say hello, Jing.

JING
Hello Jing.

PING
(to the crowd)
I'm Ping.  She's Jing.  She's the good one.
(closer)
I'm the bad one.

As the MUSIC builds towards the climax, Edward finishes the fight, knocking the guard out with a right hook.

As Ping and Jing reach the last chorus, they strike a final pose in the shape of a heart, their arms forming the arches, their backs forming the curves.  

Edward slips behind curtains, trying to get away.

The soldiers are SHOUTING for an encore, lighters waving.  The curtain slowly lowers, revealing

EDWARD'S PARACHUTE.

The APPLAUSE dies, replaced by a concerned RUMBLE.  The Emcee yells for the Guards to search.

ON STAGE

Ping has no idea what's happening.  Jing reaches into her cleavage to pull out her eyeglasses. 

INT.  DRESSING ROOM - NIGHT

As ARMED GUARDS search the halls below the stage, Ping and Jing shut the door to their dressing room.  At the closet, they start to change outfits.  Off-stage, their personalities become quite apparent:  Ping is brash, bitchy and ambitious, while Jing is quiet, sweet and bookish.

_In Chinese, subtitled..._

PING
How could you miss your cue?  You make me look like a fool, out there alone.

JING
You weren't alone.

Ping HUFFS, turning her back on her sister.

Jing reaches deeper into the closet to find a new dress, exposing Edward's hiding place.  She GASPS.  Ping turns to look.

PING
Who the hell are you?

EDWARD
(in Chinese)
I'm not going to hurt you.

PING
Damn right you're not. 
(yelling)
GUARD!

Jing grabs her, a hand over her mouth, but it's too late.  A rifle-toting GUARD looks in.

Pretending to be her bitchy sister --  

JING
Tell your men not to bother us!  And lock that door!

The guard obeys.  Ping shakes her sister off.  Desperately flipping through his Asian phrasebook, he finds... 

EDWARD
Please, I need your help.

PING
What makes you think we'll help you?  

Edward pulls a photo out of his flak jacket.  It's Sandra.

CROSSFADE TO:

VARIOUS SHOTS

EDWARD (V.O.)
Over the next hour, I described my love for Sandra Kay Templeton, and the ordeal that brought me before them.  As it had always been, this love was my salvation.  It was destined to be.

Hearing the story, Jing wipes away a tear.  Even Ping is a little affected.

EDWARD (V.O.)(CONT'D)
We put together an elaborate plan for escape, involving a whaling ship to Russia, a barge to Cuba and a small, dirty canoe to Miami.  We all knew it would be dangerous.

_Still subtitled:_

PING
And what are we supposed to do when we get to America?

EDWARD
I can get you bookings.  I know the biggest man in show business.

JING
Bob Hope?

EDWARD
Bigger.

TRANSITION TO:

EXT.  TEMPLETON FAMILY HOUSE - DAY

Sandra checks the mail, hoping for a letter from Edward.

EDWARD (V.O.)
And so the twins and I began our arduous journey halfway around the world. Unfortunately, there was no way to send a message back to America. 

A black car pulls up.  Two ARMY OFFICERS get out.

EDWARD (V.O.)(CONT'D)
And so it was no surprise that the Army believed I was dead.

Hearing the news, Sandra CRIES OUT.  The pain of her shout makes church bells RING.

EXT.  BEHIND THE TEMPLETON HOUSE - DAY

Sandra hangs sheets to dry on the clotheslines, forming a tunnel of fabric.

EDWARD (V.O.)
After four months, Sandra had gotten over the worst of the nightmares.  When the phone rang, she didn't think it was somehow me calling her.  When a car drove past, she didn't get up to check out the window.

Pulling a dress out of the basket, Sandra looks up to see 

A MAN'S SILHOUETTE 

on the sheet in front of her.  She freezes, watching the shadow ripple across the white fabric, blowing so softly in the breeze.  She knows it can't be him.  He's dead.

She turns away.  With all the strength she can gather, she hangs up that dress and digs another one out of the basket.

Looking up, she sees not a shadow but Edward himself standing before her.  She GASPS, disbelieving, but his hand is real.   It is destiny.

Without another moment's hesitation, she kisses him.

CROSSFADE TO:

BRIGHT SUNLIGHT

filters through soft sheets.  We're under the covers, where a man's hand traces the curves of a woman's bare back.   A beat, then she turns over in bed, revealing her to be 

JOSEPHINE.

She blinks slowly, just waking up.  Will is watching her.  He's been up for a while.  We are actually...

INT.  WILL AND JOSEPHINE'S ROOM - DAY

...where the couple stays cocooned under the sheets, a kind of limbo.  A kiss good morning.  Legs entangling.  Neither wants to get up.

JOSEPHINE
I talked with your father last night.

WILL
Did you?

A look to say, should I be worried?

JOSEPHINE
You never told me how your parents met.

WILL
They met at Auburn.

JOSEPHINE
What about the details?  How they fell in love.  The Circus.  The War.  You never told me any of that.

WILL
That's because most of it never happened. 

JOSEPHINE
But it's romantic.

A beat.

WILL
(non-committal)
Mmm.

JOSEPHINE
Mmm, what?

WILL
Mmm, what.  I know better than to argue romance with a French woman.

He moves his head out from under the sheet.  She follows him to the "outside."

JOSEPHINE
Do you love your father?

WILL
Everyone loves my father.  He's a very likeable guy.

JOSEPHINE
(repeating)
Do you love him?

Will doesn't want to answer yes or no.

WILL
You have to understand.  When I was growing up, he was gone more than he was here.  And I started thinking -- maybe he has a second life somewhere else.  With another house, another family.  He leaves us, he goes to them.  Or maybe there is no family.  Maybe he never wanted a family.  But whatever it is, maybe he likes that second life better.  And the reason he tells all those stories is because he can't stand this boring place.

JOSEPHINE
But it's not true.

WILL
What is "true?"  I've never heard my father say a single true thing.  

Off her silence...

WILL
Look, I know why you like him.  I know why everyone likes him.  But I need you to tell me I'm not crazy.

JOSEPHINE
You're not.

WILL
I need you on my side.

JOSEPHINE
I am always on your side.  And I think you should talk to him.

INT.  GUEST ROOM - DAY

The family finishes eating breakfast off TV trays set up around the bed.  For his part, Edward is looking better.  Certainly not recovered, but there's an optimism to his expression.  And for the first time, he's actually hungry.  

He watches as Sandra puts the cap back on the syrup.

EDWARD
Did I ever tell you about how...

WILL
(interrupting)
Yes.

Edward is startled.

WILL  (CONT'D)
The maple tree and the Buick.  We heard it.

EDWARD
(re:  Josephine)
I think someone hasn't.

JOSEPHINE
The tree fell on the car, spilling the syrup, which attracted the flies, which got stuck to it and flew off with the whole car.

A beat.

EDWARD
(undeterred)
But the real story is how I got the car.  You see...

WILL
(interrupting)
Dad?

EDWARD
Son?

WILL
Can we talk?

Sandra SNAPS the cap back on the syrup.  

SANDRA
I'm going to get started on dishes.

JOSEPHINE
I'll help you.

Both women quickly gather plates.  

Will and Edward both smile.  The women clearly want this to happen.  It settles for a beat after they leave.

WILL
Do you know much about icebergs, Dad?

EDWARD
Do I?  I saw an iceberg once.  They were hauling it down to Texas for drinking water, only they didn't count on an elephant being frozen inside.  The woolly kind.  A mammoth.

WILL
(interrupting)
Dad!

EDWARD
What?

WILL
I'm trying to make a metaphor here.

EDWARD
Then you shouldn't have started with a question.  Because people want to answer questions.  You should have started with, "The thing about icebergs is..."

WILL
(frustrated)
The thing about icebergs is you only see 10 percent of them.  The other 90 percent is below the water where you can't see it.  And that's what it is with you Dad.  I'm only seeing this little bit that sticks above the water.

EDWARD
(joking)
What, you're seeing down to my nose?  My chin?

WILL
I have no idea who you are because you have never told me a single fact.

EDWARD
I've told you a thousand facts.  That's all I do, Will.  I tell stories.

WILL
You tell lies, Dad.  You tell amusing lies.  Stories are what you tell a five-year old at bedtime.  They're not elaborate mythologies you maintain when your son is ten and fifteen and twenty and thirty.  And the thing is, I believed you.  I believed your stories so much longer than I should have.  And then when I realized that everything you said was impossible -- everything! -- I felt like such a fool to have trusted you.  You were like Santa Claus and the Easter Bunny combined.  Just as charming and just as fake.

EDWARD
You think I'm fake.

WILL
Only on the surface.  But that's all I've ever seen.

Edward looks away, angry and disbelieving.  

WILL
Dad, I'm about to have a kid of my own here.  It would kill me if he went through his whole life never understanding me.

EDWARD
It would kill you, huh?

Finally --

EDWARD
What do you want, Will?  Who do you want me to be?

WILL
Yourself.  Good, bad, everything.  Just show me who you are for once. 

EDWARD
I have been nothing but myself since the day I was born.  And if you can't see that, it's your failing, not mine.

EXT.  BACKYARD - DAY

With a skimmer pole, Will cleans the leaves and debris out of the pool, but it's a fool's errand.  The pool has long since gone native, a shiny slick of algae on the surface, slime covering the cemented rocks.  

Suddenly, an underwater shape RIPPLES against the water's surface.  Will is so startled that he drops the pole, which disappears into the murky water.  

A beat.  He looks around, relieved that no one saw that.  He casually walks away.

INT.  BASEMENT STORAGE AREA - DAY

The doors open to reveal Sandra, Will and Josephine, staring into the mouth of oblivion.  The storeroom is a museum of hasty decisions and half-finished projects:  partially built outboard motors, dead bonsai trees, Frankensteinian lawnmowers.  We also find boxes of products Edward used to sell.

Clearing a path, Sandra leads Will to a roll-top desk, its ribs covered in dust.  Two beaten metal file cabinets sit beside it.

SANDRA
Your father decided he needed to have an office, and it wouldn't do to have it in the house.  You'll know better than me what's important.

With some effort, Will forces up the desktop.  With a HISS, a neighbor's cat makes a run for it.  Will's getting used to being startled.

INT.  BASEMENT STORAGE AREA - DAY [LATER]

Will, Sandra and Josephine have worked through two trash bags of papers to throw out.  Looking through a new file, Sandra makes a small sound.  A memory.

WILL
What is it?

Sandra hands Will a yellowed telegram.  He shares it with Josephine.

SANDRA
It was during the war.  Your father went missing.  They thought he was dead.

Will can't believe what he's reading.

WILL
That really happened?

SANDRA
Not everything your father says is a complete fabrication.

A beat, then Sandra stands.

SANDRA
I'm going to check on him.

JOSEPHINE
I need to lie down for a bit.

WILL
Go.

Josephine kisses him, then follows Sandra.  Will re-reads the telegram, still bewildered.

Looking for a place to put it, he tucks it into a strange mechanical hand on the desk.  It clamps down automatically.

Will smiles, a memory.  He hasn't thought about this device in years.  We slowly PUSH IN on the telegram, held in the hand.

Edward's VOICE begins as a memory...

EDWARD (V.O.)
After the war, the sons of Alabama returned home, looking for work.  Each had an advantage over me.  They were alive, while I was -- officially -- deceased.

INT.  DOWNTOWN OFFICE - DAY [STORY]

Edward shakes hands with his new boss, a TOUPEED MAN.  The company is called "Confederated Products."  The OFFICE LADIES all love Edward.

EDWARD (V.O.)
With my prospects few, I took a job as a travelling salesman.  It suited me. If there's one thing you can say about Edward Bloom, it's that I am a social person.

EXT.  COUNTY FAIR - DAY  [STORY] 

On a low platform, Edward pitches a brilliant new product to the crowd.

EDWARD
I've travelled from Tennessee to Timbuktu, and if there's one thing people have in common, is we could all use a hand around the house.

Edward sets down a contraption, which looks something like a metal lava lamp.  Like a flower, it unfolds to reveal five fingers and a thumb.  This is the Hand Around the House.(TM)

EDWARD
Why, with this product you can...

QUICK MONTAGE as he demonstrates:

EDWARD
Open a jar.  Open a letter.  Scratch yourself while wearing mittens.  Hold a book.  Hold a baby.  Hold the dog away from kittens.  It's strong enough, you can do a handstand with no hands at all.

Indeed, a remarkably agile Edward is able to support his entire weight on it.  The crowd APPLAUDS.

EDWARD
You can use it to point out important information.  Or dangers.  Or beautiful women.

The hand points a finger at an HEAVYSET MAN IN OVERALLS.  

EDWARD
We're still working on that one.

The crowd LAUGHS.

EXT.  A COUNTRY ROAD - DAY

Edward drives, his hand out in the wind.

EDWARD (V.O.)
Soon I added other products, and other cities, until my territory stretched from the coast to western Texas.

EXT.  TRAILER PARK - DAY  

Edward kisses his pregnant wife goodbye, as much in love as ever.

EDWARD (V.O.)
I could be gone for weeks at a time.  But every other Friday, I'd put all the money I'd made into an account set aside for a proper house with a white picket fence.

EXT.  HORIZON SAVINGS & LOAN - DAY 

Establishing this Texas institution, we come...

INT.  HORIZON SAVINGS & LOAN - DAY 

The bank is busy with the lunch-hour crowd.  Taking his place in line, Edward fills out a deposit slip.  

As the line snakes around through the ropes, the man in front of him gets a look at Edward.

THE MAN
Edward?  Edward Bloom?

The man is none other than...

NORTHER WINSLOW
It's me.  Norther Winslow.

EDWARD (V.O.)
I was astonished to see the greatest poet of both Ashton and Spectre all the way out in Texas.

The men shake, disbelieving this lucky coincidence.

EDWARD (CONT'D)
I don't believe it!

NORTHER WINSLOW
I want you to know, when you left Spectre it opened my eyes.  There was a whole life out there that I was not living.  So I travelled.  I saw France, and Africa, half of South America.  Every day a new adventure, that's my motto.

EDWARD
That's great, Norther.  I'm happy for you.  I can't believe I helped.

He's genuinely proud.

EDWARD (CONT'D)
So what are you up to now?

NORTHER WINSLOW
I'm robbing this place.

Reaching the front of the line, Norther pulls two pistols out of his coat, FIRING both into the ceiling.

SCREAMS all around.  The skinny SECURITY GUARD makes a half-hearted reach for his gun, but Norther waves him off.  The guard takes out his gun and slides it over.

NORTHER WINSLOW (CONT'D)
(to Edward)
Would you mind grabbing that?

There's nothing threatening about his delivery -- he might as well be asking for a Budweiser.  Still, Edward senses it would be best to do as he says.  He takes the guard's gun.

NORTHER WINSLOW (CONT'D)
(to the crowd)
Now, I want all of you to lie down.  I'm gonna be cleaning out the cash drawers, and my associate here is going to handle the vault.
(pointing to a Teller Woman)
You help my friend, okay?

The TELLER WOMAN nods.

ANGLE ON Edward, not sure what to do.  He has a gun, but he truly doesn't want to shoot Norther.  The Teller Woman is already waving him to the back.

He decides he better go.

INT.  AT THE VAULT - DAY 

The Teller Woman is crying as she works the combination.  Edward feels horrible.

EDWARD
Look, I'm really sorry.  I just don't want anybody to get hurt.

TELLER WOMAN
It's not that, it's just...

She pulls open the vault door.

INT.  THE VAULT - DAY  

The inner sanctum of the Horizon Savings and Loan holds exactly one folding chair.  Nothing else.

TELLER WOMAN
...there's no money.  We're completely bankrupt. 

EDWARD (V.O.)
It turned out the savings and loan had already been robbed -- not by armed bandits, but by speculators in Texas real estate.

TELLER WOMAN
(dead serious)
You gotta promise you won't tell anybody.

CUT TO:

INT.  EDWARD'S CAR - DAY  

Edward drives the getaway car, though truthfully they're going just a little over the speed limit.  No one's following them.  It's an empty country road for miles.

Norther HOLLERS with body-tingling joy as he counts the money.

NORTHER WINSLOW
Sixty.  Eighty.  Four hundred dollars!   Not bad for just the drawers.  Let's see what you got from the vault.

Edward winces, but doesn't say anything yet.  Digging through the vault bag, Norther is surprised to find only a single deposit envelope.  He rips it open, revealing just a little cash inside.  Even some dimes and pennies.

NORTHER WINSLOW (CONT'D)
This is it?  The whole vault.

EDWARD
'Fraid so.

NORTHER WINSLOW
Edward, it's got your deposit slip on it.

Caught, Edward has to confess...

EDWARD
Look, I just didn't want you to go empty-handed.  There's something you should know, Norther.  You see, the reason why...

Edward continues his narration...

EDWARD (V.O.)
I told Norther about the vagaries of Texas oil money and its effect on real estate prices, and how lax enforcement of fiduciary process had made savings and loans particularly vulnerable.  Hearing this news, Norther was left with one conclusion:

EXT.  TEXAS ROAD - DAY 

Norther leans in the driver's side window.

NORTHER WINSLOW
I should go to Wall Street.  That's where all the money is.

Edward looks over at Norther, the reality sinking in.

EDWARD (V.O.)
I knew then that while my days as a criminal were over, Norther's were just beginning. 

The two men wave at each other as Edward drives off.  At the last moment, Norther calls out:

NORTHER WINSLOW
Edward, thank you for the hand!

He's talking about his Hand Around the House.  We HOLD ON Norther for a beat, dreaming of his future.

EDWARD (V.O.)
When Norther made his first million dollars, he sent me a check for ten thousand.  I protested, but he said it was my fee as his career advisor.

EXT.  BLOOM HOUSE [MID/LATE '70'S] - DAY  

Sandra is watering the garden.  Will (5) runs past her to greet Edward, just returned from another trip.

EDWARD (V.O.)
Ten thousand dollars is no fortune to most men.  But it was enough to buy my wife a proper house with a white picket fence.

We reveal the Bloom house, the nicest one in the neighborhood.  Edward kisses his wife.

EDWARD (V.O.)
And for that, it was all the riches a man could ever want.

Sandra drops the hose, letting it run on the lawn.

TRANSITION TO:

INT.  BLOOM HOUSE BATHROOM - DAY [PRESENT] 

CLOSE ON Edward's hand as he turns knobs.

CLOSE ON water SPLASHING into the claw-foot bathtub, which begins to fill.

Still wearing his pajamas, Edward climbs into the tub.  Carefully lowers himself.

As the water reaches the third button up on his pajama shirt, Edward suddenly slides 

UNDERWATER.

Bubbles rise from his nose for a few beats, then stop.  It's quiet, except for the distant SPLASHING of water from the spigot.  Edward's eyes are closed.

A long beat.  Another.  Then the SPLASHING water goes silent.  Edward opens one eye.  The other eye.  He sits up to find 

SANDRA 

sitting on the edge of the tub.  She doesn't seem particularly worried -- her husband has always done this.

EDWARD
I was drying out.

SANDRA
I see.  We need to get you one of those plant misters.  We can spray you like a fern.

He smiles, then pulls his knees up, making room for her in the tub.  A beat while she considers.

Sandra steps out of her sandals and climbs into the tub, facing him.  Her dress is soaked, but she doesn't mind.

He leans forward and kisses her.  When they separate, she has tears hanging in her eyes.

EDWARD
Come now.

He wipes them away.

SANDRA
I don't think I'll ever dry out.

INT.  BASEMENT STORAGE AREA - DAY

Perched awkwardly on a canoe, Will's made it through another file cabinet.  He goes through the folders page by page, but usually ends up tossing the whole thing in the trash.

He's about to toss a file when he stops.  Takes another look. Something doesn't make sense.

INT.  BLOOM HOUSE / STAIRS - DAY

Will is headed upstairs when his mother comes around the corner with an armful of laundry, including her wet dress.

WILL
Is he awake?

SANDRA
He just fell asleep.  Josephine's with him.

She passes him.  He turns.

WILL
Mom?

SANDRA
Yes?

Will quickly debates whether or not to ask her...

WILL
Did you and Dad have any other property?

SANDRA
(thinking)
I suppose your grandmother's house when she passed on.  But we sold that right away.  Your cousin Shirley bought it.

WILL
So you never bought any land.

SANDRA
Heavens no.  We had a hard enough time keeping the mortgage on this place.

Will nods, just curious.  He continues heading up.

INT.  WILL AND JOSEPHINE'S ROOM - DAY

Will changes his shirt.  Takes his keys off the nightstand.

EXT.  COUNTY ROAD - DAY

Will's rental car drives past a sign reading, "Ashton, 10 miles."

INT.  WILL'S CAR - DAY / DRIVING

Will checks the address on one of his father's files.

EXT.  ASHTON GAS - DAY

Will talks to the ATTENDANT, who points him in a direction, then gestures a series of left, right, left, rights.

EXT.  ROAD - DAY

Will drives down a road that seems somewhat familiar.  And then we realize why:  a roadsign reads "Welcome to Spectre!"

EXT.  A LONE HOUSE - DAY

Sitting at the edge of a swamp, the little two-story feels lonely, set deep in its lot.  Dapples of light break through the trees, a light breeze swaying the branches.

As Will walks from the car, the WHIRR of cicadas grows.  He checks the number:  33.  This is the house.  It is surrounded by a white square-picket fence, identical to his mother's.  Will notices this.

Reaching the porch, we hear a PIANO playing inside.  Badly.

Re-checking the number on a form he's carrying, Will KNOCKS.  The piano stops.

WOMAN'S VOICE (O.S.)
Go back to the start.  Right hand only.

The piano starts again.  FOOTSTEPS.

The door opens to reveal a blonde woman in her 50's -- the woman from the grocery store.  Her name is Jenny Hill.

She and Will are startled to see each other.

JENNY
Oh.  Oh.

WILL
Hello.

JENNY
I wasn't expecting you.

Confused, Will checks the name on the form.

WILL
Are you Jenny Hill?

JENNY
I am.  And you're Will.  I've seen your picture, that's how I recognize you.  I almost said something at the store, but it would have been awkward.
(a beat)
Like this.

The PIANO STUDENT, a black boy of eight, has stopped.  He's watching the conversation at the door.  Speaking of awkward...

JENNY (CONT'D)
(to the student)
Listen, Kenny.  Why don't we skip the lesson today?  We can go again next week.

She hands him five dollars out of her pocket.

STUDENT
Do I have to give it back to my Mom?

JENNY
I won't tell her if you won't.

You don't have to tell him twice.  He's out the door in a flash.

INT.  JENNY'S KITCHEN - DAY

While Will sips his iced tea, Jenny flips through a form she never expected to see again.  She hands it back to Will. 

WILL
How did you know my father?

JENNY
This was on his sales route, so he was through here all the time.  Everyone in town knew him.

A beat.  Not flinching...

WILL
Were you and my father having an affair?

JENNY
(taken aback)
Wow.  Wow, you just said it.  I was expecting to dance around this for another half hour.

WILL
I've seen him with women.  He flirts.  He always has.  On some level, I presumed he was cheating on my mother.  I just never had proof.

She moves, trying to get out of the corner he's boxed her into.  Once she's finally free...

JENNY
Can I ask you a question?  Why did you come here today?  If you found this deed, why didn't you just ask Eddie?

WILL
Because he's dying.

A long beat.  Jenny is taken back by the suddenness of it.  She's a tangle of conflicting emotions.

JENNY
Look, I don't know how much you want to know about any of this.  You have one image of your father and it would be wrong for me to go and change it.  Especially this late in the game.

WILL
My father talked about a lot of things he never did, and I'm sure he did a lot of things he never talked about.  I'm just trying to reconcile the two.

Fair enough.  Jenny takes a seat across from him at the table.

JENNY
The first thing you have to understand, is that your father never meant to end up here.  And yet he did, twice.  The first time, he was early.  The second time, he was late.

INT.  EDWARD'S CAR / DRIVING - NIGHT 

It's late, and Edward is pensive. 

JENNY (V.O.)
Those days, your father was working for himself.  If there was one thing you could say about Edward Bloom, it's that he was a social person, and people took a liking to him.  One night he was returning from three weeks on the road, when he hit a thunderstorm unlike any in his life.

The first raindrops hit the windshield.  Edward turns on the wipers. 

INT. EDWARD'S CAR - NIGHT - [THE STORM]

Suddenly, a deluge descends.  It's not even rain anymore -- there's no space between the drops.  It's like being caught in a waterfall.  It's that loud.

No choice, Edward stops the car.  Puts on the handbrake.  Just as suddenly, the sound changes -- no longer pounding, but softly SPLASHING.  The world is close and echoing, because --

EXT.  EDWARD'S CAR - NIGHT 

-- the car is underwater.  The tires are still on the road, but where there used to be air is water.

Three catfish swim in front of his headlights.

INT.  THE CAR - NIGHT 

Realizing his plight, Edward tries to remain calm.  Water is trickling in through the crack between the window and the door, but very slowly.  For now, he's fine.

That's when he sees her -- The Girl in the River.  

She's swimming outside the car.  While we never see her face exactly, she remains just as beautiful, just as mysterious, as the first time we saw her.

She puts her hand to the windshield.  He puts his up to meet hers.  And smiles.

FLASH CUT TO:

EXT.  FIELD BY DIRT ROAD - DAY

It's morning, and the sun shines brightly.  Birds CHIRP.  Trees drip and the grass shines, still wet from last night's rain.

Edward gathers the clothes that have spilled out of his suitcase, which broke open when he dropped it from 

HIS CAR,

which balances precariously ten feet up in an elm tree.  As Edward gathers his last pair of socks, he notices a shiny piece of metal sticking out of the dirt.  He pulls it out, rubs it off.

It's a key.  It's the Key to the City he lost years ago.

JENNY (V.O.)
Fate has a way of circling back on a man, and taking him by surprise.  

EXT.  ROAD - DAY

Carrying his busted suitcase, a tired Edward walks toward a one-street town in the distance.  We pass a rusty sign...

"Welcome to Spectre."

EXT.  MAIN STREET - DAY

Amazed and disbelieving, Edward walks down the center of the road, no cars coming from either direction.  He looks up to find his faded shoes still dangling from the power line, along with the rest of the town's.

JENNY (V.O.)
A man sees things differently at different times in his life.  This town didn't seem the same now that he was older.  

EXT. TOWN OF SPECTRE - VARIOUS SHOTS

We look around the town, on and off Main Street.   There are "FOR SALE" signs in many of the windows

JENNY (V.O.)
A new road had brought the outside world to Spectre, and with it, banks, liens and debt.  Almost everywhere you looked, people were bankrupt.  

EXT.  SPECTRE - DAY

We slowly MOVE THROUGH a foreclosure auction to find Edward watching.  Two very corporate MEN IN SUITS, stick out among the bidders.

JENNY (V.O.)
Two different corporations were looking at buying the town, if they could get the price low enough.   One wanted to open a chicken processing plant.  The other, a municipal dump.  Either way, Spectre would be destroyed.

Edward raises his hand.

EDWARD
Fifty-thousand!

Everyone turns to look at this new bidder.

JENNY (V.O.)
And so Edward Bloom decided to buy the town, in order to save it.

INT.  NORTHER WINSLOW'S MANHATTAN - DAY  

Edward pitches his plan to Norther.

JENNY (V.O.)
He was never a wealthy man, but he had made other men rich, and now he asked for their favors.

INT./EXT.  VARIOUS LOCATIONS - DAY  

VARIOUS SHOTS:  Expressive and passionate as always, Edward talks to Ping, Jing and Amos Calloway.

JENNY (V.O.)
Most of them had never seen Spectre -- they only had Edward's words to describe it.  That's all they needed.  He sold them on the dream.  

JING
You can structure it as a historical trust.  But you'll need every contiguous piece of property.  It's all or nothing.

As Edward takes notes...

JENNY (V.O.)
So first he bought the farms.  Then he bought the houses.  Then he bought the stores.

INT.  AL'S COUNTRY - DAY

Finishing up with AL, Edward shakes hands.

JENNY (V.O.)
Whatever he bought, the people were not asked to leave or pay rent or anything.  They were just asked to keep doing as they were doing.  In that way, he could make sure the town would never die.

EXT.  ROAD IN THE SWAMP - DAY

Edward climbs out of his car, the road having literally stopped.  The sun is shining, but it can barely penetrate the trees' thick canopy.  

JENNY (V.O.)
Within six months, his trust had purchased the entire town.  With one exception.

In the distance, he sees a shack, so old it's nearly fallen.  He walks toward it, the marshy ground SQUISHING up around his feet, soaking the hems of his trousers.

We hear a PIANO playing from inside the shack.  Edward KNOCKS on the half-hung door, which swings open by itself.

INT.  SHACK - DAY

The inside is nicer than you'd think, a real home.  A fire burns in the stove, and curtains hang in the windows.

With her back turned to him, Jenny Hill plays the piano.  Edward doesn't recognize her as the little girl who used to have a crush on him.  Without turning, she says...

JENNY
You must be Edward Bloom.

EDWARD
How did you know?

She keeps PLAYING.

JENNY
No one would come out here unless they had business.  And no one would have business with me except for you.  You're buying the town.

EDWARD
Apparently I've overlooked this one piece of it, and I'd like to remedy that.  You see, in order for the town to be preserved, the trust must own it in its entirety.  

JENNY
So I've heard.

EDWARD
I'll offer you more than it's worth.  And you know you won't have to move.  Nothing will change except the name on the deed, you have my word.

Jenny stops playing, her piece not quite finished.  She turns to face him.  Edward still doesn't recognize her.

JENNY
Now let me get this straight.  You'll buy the swamp from me, but I'll stay in it.  You'll own the house, but it'll still be mine.  I'll be here, and you'll come and go as you please to one place or another.  Do I have that right?

Strange to hear it put that way, but --

EDWARD
In so many words, yes.

JENNY
Then I don't think so Mr. Bloom.  If nothing is going to change, I'd just as soon it not change in the way it hasn't been changing all this time.

EDWARD
It's not like you're going to lose anything.  You can ask anyone in town.  I've been nothing if not generous.  I want the best for everyone.

A long beat.  

JENNY
Mr. Bloom, why are you buying this land?  Some sort of midlife crisis?  Instead of buying a convertible, you buy a town?

He looks at her, puzzled and surprised.  No one has really asked before.

EDWARD
Helping people makes me happy.

JENNY
I'm not convinced you should be happy.

EDWARD
I'm sorry.  Have I offended you?

She finally turns to face him.

JENNY
No, you did exactly what you promised.  You came back.  I was just expecting you sooner.

FLASHBACK TO:

EXT.  SPECTRE - NIGHT

Young Jenny Hill watches barefoot Edward leave Spectre for the first time.

BACK TO:

INT.  SHACK - DAY  

Finally realizing who this woman is...

EDWARD
You're Beamen's daughter.  Your last name is different.
(realizing)
You married.

JENNY
I was 18.  He was 28.  Turns out that was a big difference.

Before he can say anything more...

JENNY (CONT'D)
I won't be selling you this house, Mr. Bloom.

EDWARD
I see.  I thank you for your time.

A bit bewildered, Edward tips his hat to her as he leaves.

EXT/INT.  SWAMP SHACK - DAY

Edward pulls the door shut behind him as he leaves, but it breaks off in his hands.  It's not the clean exit he was hoping for.

Inside Jenny looks out, surprised and annoyed.

Edward tries to lift the door back on the hinges, but they SNAP off.  The door frame buckles and the whole shack CREAKS.

EDWARD
I'm sorry.

He tries to lean the door against the frame, but it keeps slipping.

JENNY
It's okay, just leave it.

EDWARD
I can get it.  I can just...

He leans the door a different way.  It holds for a beat then falls in, SMASHING a small table.

EDWARD (CONT'D)
Lord, I'm sorry I...

JENNY
Please.  Go.  Just go.

EDWARD
I'll...

JENNY
Go.

She's dead serious.  Weighing the scales of chivalry, he finally backs away.  Turns and heads back towards his car.

We STAY ON Jenny, watching him go.  She's furious, but there's something more in her feelings for him.  Something softer.

JENNY (V.O.) (CONT'D)
Most men in that situation would accept their failure and move on.  But Edward was not like most men.

EXT.  SWAMP SHACK ROAD - ANOTHER DAY

With Karl the Giant's help, Edward unloads a brand new door from a pickup truck.  

EXT.  SHACK - DAY

While Jenny watches, half-annoyed, half-amused, Edward tries to set the door square.  Karl pushes against the side of the house until it fits.

INT.  SHACK - ANOTHER DAY

Holding nails between his lips, Edward puts in new windows himself.  Jenny is making soup, laughing at the story he's telling.

JENNY (V.O.)
As the months passed, he found more and more things to fix, until the shack no longer resembled itself.

EXT.  SWAMP - ANOTHER DAY

Edward and Karl cut down a tree, letting in a flood of light.  Through the golden pollen hanging in the air, we RISE UP to see the shack is now 

THE LOVELY HOUSE

we saw before.  It's tiny and white, with black shutters and a steep roof.  A white picket fence.  In every detail it is impossibly charming.

INT.  JENNY'S HOUSE - DAY

Edward is screwing a hat rack into the wall in the foyer.  Jenny leans against the doorframe listening to his story.  And watching him with deepest affection.

EDWARD
Of course, the best part was creating new material.  By the time the twins and I got to Havana, we had a whole new routine worked out for them, with just a ukulele and a harmonica.

Finished with his work, he takes his hat off the chair and hangs it on the rack.  Perfect.

A beat.  A look between them.  With that last job done, there's no reason for him to be staying any longer.

EDWARD (CONT'D)
I suppose I should...

He takes his hat off the rack.

JENNY
You can leave it there.

A beat.  Does she really mean it?  

She comes closer.  Edward holds his ground.  She takes his hand, lifting his hat up to the peg.  She's very close -- just a half-inch from kissing him when --

-- Edward gently holds her back.

EDWARD
No.

She freezes, stunned and humiliated.  She pulls away.

EDWARD  (CONT'D)
Don't.  Don't be embarrassed.  I should never have let you think that...
(beat)
I am in love with my wife.

JENNY
I know.

EDWARD
And from the moment I saw her until the moment I die, she's the only one.  

JENNY
Lucky girl.

EDWARD
I'm sorry, Jenny.  I am.

With that, he begins to leaves.

JENNY
Wait!  Edward!

She finds a pen and hastily signs the deed to the house.  Hands it to him.  With a look, he thanks her.  Then goes.

EXT.  SPECTRE - MAGIC HOUR

Edward takes a final look at this perfect little town.

JENNY (V.O.)
One day, Edward Bloom left, and never returned to the town he'd saved.

He climbs in his car and starts the engine.

EXT.  JENNY HILL'S HOUSE - DAY TO NIGHT

As we watch, the swamp begins to overtake the house, swallowing it in a tangle of vines and mossy branches.  Shoots burst up through the planks in the porch.  Snakes slither through the marsh.

Day becomes night.

JENNY (V.O.)(CONT'D)
As for the girl, the common belief was that she'd become a witch, and crazy at that.  She became something of a legend herself.

We REVERSE to find FOUR KIDS looking in through the rusty iron gate with flashlights.  A beat, then they run away.

JENNY (V.O.)(CONT'D)
And the story ended where it began.

INT.  JENNY HILL'S KITCHEN - PRESENT DAY

Will and Jenny are still sitting at her table, a pitcher of iced tea between them.

WILL
Logically, you couldn't be the Witch, because she was old back when he was young.

JENNY
No, it's logical if you think like your father.  See, to him, there's only two women:  your mother and everyone else.

WILL
You didn't become crazy.

JENNY
Well, therapy.  And one day I realized I was in love with a man who could never love me back.  I was living in a fairy tale.  

Will smiles to hear it called that.

JENNY (CONT'D)
People aren't like they are in stories.  They hurt each other without meaning to.  They are kind and unbelievably cruel at the same moment.  Like me, now.  I'm not sure I should have told you any of this.

Her composure is starting to break.

WILL
No, I wanted to know.  I'm glad I know. 

A long beat, both staring at their iced tea.  Jenny is working herself into more of a state by not talking.

JENNY
I wanted to meet you for the longest time.  I did.
(a smile)
I envied you so much.  The way Eddie would talk about you when you were at Missouri, that award you won.  Congratulations, incidentally.  And when you got the job at the A.P., everything, he was so proud of you.  I mean, that's the thing.  Every moment he loved you.  

She's fighting tears, not the first ones she's shed over this.

JENNY (CONT'D)
And as brightly as the sun would shine when he was with me, every time he left it disappeared.  I wanted to be as important to him as you were, and I was never going to be.  I was make-believe and his other life, you, were real. 

ANGLE ON Will, sorting through his swirling thoughts.

JENNY (CONT'D)
You knew that, didn't you?

CUT TO:

INT.  WILL'S CAR - DAY / DRIVING

Will skips through the stations on the radio, but ultimately turns it off.  He's trying to think.

EXT.  BLOOM HOUSE - DUSK

Will walks up the front steps.  There's a subtle change to his expression, a dark cloud lifted.  He unlocks the door.

INT.  BLOOM HOUSE FOYER - DUSK

It's half-dark and quiet in the house, no talking, no TV.  Will sets his keys on the table.

INT.  KITCHEN - DUSK

Will looks in.  Empty.

WILL
(calling out)
Hello?  Mom?  Dad?

INT.  UPSTAIRS HALLWAY - DUSK

We follow Will, looking into his and Josephine's room.  He aims for the guest room at the end of the hall.

INT.  GUEST ROOM - DUSK

Looking over his shoulder, we see his father's bed is empty.  The sheets are in a tangle on the floor.

A beat, then Will half-runs back down the hall.  Back down the stairs.

INT.  FOYER - DUSK

Headed out, Will grabs his keys off the table.  We LOOK RIGHT, where the "MESSAGE" light blinks on the answering machine.

INT.  HOSPITAL ENTRANCE - NIGHT

The hospital is so new, it's not even finished -- thick plastic hangs from exposed framing.  There's no one at the information desk, so Will forges ahead.

INT.  HOSPITAL HALLWAY - NIGHT

Will reads a directory board, trying to decide the best place to start.  Then, behind him --

JOSEPHINE (O.S.)
Will!

He turns to see his wife at a payphone.  She hangs up.  She was calling him.

WILL
What happened?

JOSEPHINE
Your father had a stroke.  He's upstairs with your mom and Dr. Bennett.

WILL
Is he going to be okay?

A beat.  How can she answer?

He half-smiles, realizing the idiocy of his question.  Of course his father's not going to be okay.

WILL (CONT'D)
What I mean is, will he get back to the way he was when...

She cuts him off --

JOSEPHINE
No.  He won't.  I'm sorry.

And like that, it's done.  We HOLD ON Will, reeling from the news.

INT.  HOSPITAL ROOM - NIGHT  

Edward sleeps peacefully, just an oxygen tube under his nose.  There are no beeping monitors, no blinking lights.  It's mercifully quiet.

Sandra squeezes Will's hand tightly.  She's holding herself together, but it's been a tough day.  

Dr. Bennett has just gone through the details for the third time.

SANDRA
I don't suppose one of us could stay with him.  In case he...
(beat)
In case he wakes up, one of us should be there.

WILL
I'll stay.  Why don't you go home with Josephine and I'll stay tonight.

SANDRA
(to Dr. Bennett)
That's okay?

DR. BENNETT
It's fine.

SANDRA
(to Will)
You'll call if...

WILL
I will.  I'll call.

A beat.

WILL
Mom, do you want some time with Dad?

SANDRA
Yes.  Thank you.

A nod, then Will holds the door for Dr. Bennett and Josephine as they leave.  Sandra is alone in the room with her husband.

She neatens his hair.  Holds his hand.  As she kisses his fingers, she tweaks her chin with them -- his signature move.

TRANSITION TO:

INT.  HOSPITAL HALLWAY - NIGHT  

Sandra waits outside the women's restroom.  Her face is a study in strained composure -- acknowledging the inevitable but refusing to surrender to it.

Josephine emerges.

JOSEPHINE
I'm sorry.  It seems every hour I have to...

SANDRA
I know.  It was the same when I was carrying Will.  Like clockwork.

The two women start to walk, no hurry.

SANDRA
Do you like it, being pregnant?

JOSEPHINE
I do.

SANDRA
I loved it.  It sounds peculiar, but I loved every minute of it.  I did.  Eddie was travelling a lot, so he was gone, but I felt like I always had a piece of him with me.  A little part of  his soul inside me.  I could feel it.  It was alive and kicking.

Sandra has accidentally evoked a storm of emotion.  She struggles to keep it in check.  Almost a whisper...

SANDRA
I really miss that.

With a few breaths, Sandra tries to hold on.  Hold back.

JOSEPHINE
Don't stop.  Don't.

A beat, then Sandra finally melts.  Josephine holds her.  The two women stand together in the hallway, letting the moment be.

INT.  HOSPITAL ROOM - NIGHT

Will sits in a chair beside the bed, working through the crossword puzzle.  A KNOCK as Dr. Bennett enters with his overcoat and bag, ready to leave for the night.  

DR. BENNETT
Glad to see you're not trying to have a heartfelt talk.  It's one of my greatest annoyances, when people talk to those who can't hear them.

WILL
My father and I have an advantage.  We never talk.

Dr. Bennett smiles as he checks Edward's chart.

WILL  (CONT'D)
How long have you known my father?

DR. BENNETT
Thirty years.  Maybe more.

WILL
How would you describe him?

DR. BENNETT
(re: chart)
Five-eleven.  One-eighty.  Regulated hypertension.
(beat)
How would his son describe him?

Tables turned, Will searches for an answer.   He doesn't have one.

Dr. Bennett hangs the chart back on the bed.  

DR. BENNETT (CONT'D)
Did your father ever tell you about the day you were born?

WILL
A thousand times.  He caught an uncatchable fish.

DR. BENNETT
Not that one.  The real story.  Did he ever tell you that?

WILL
(suddenly interested)
No.

DR. BENNETT
Your mother came in about three in the afternoon.  Her neighbor drove her, on account of your father was on business in Wichita.  You were born a week early, but there were no complications.  It was a perfect delivery.  Now, your father was sorry to miss it, but it wasn't the custom for the men to be in the room for deliveries then, so I can't see as it would have been much different had he been there.  And that's the real story of how you were born.

A long silence, just the sounds of the hospital, doctors being paged.

DR. BENNETT (CONT'D)
Not very exciting, is it?  And I suppose if I had to choose between the true version and an elaborate one involving a fish and a wedding ring, I might choose the fancy version.  But that's just me.

Will half-smiles.

Patting Will's shoulder, Dr. Bennett leaves.  We STAY ON Will and his father for a long time, then Will takes his pen and starts making a list.

INT. HOSPITAL ROOM - VARIOUS SHOTS

Will flips to a new page.  The list keeps getting longer.

He smiles, remembering something.  On his fourth page, he looks up at his motionless father.   A beat, then we slowly

CROSSFADE TO:

INT.  HOSPITAL ROOM - PRE-DAWN  

It's very early morning, and the first blue light of day is glowing through the vertical blinds.  Still in his chair, Will wakes up a bit at a time.  The notepad is on his lap, the pen in his hand.  

He cracks his neck, crooked from sleeping on it wrong.  What woke him up?

He looks to his right.  Holds his gaze for a breath.

WILL
Dad?

His father is awake, silently GASPING for breath.  His eyes are open, scared and confused.

WILL (CONT'D)
Dad!  Do you want me to get a nurse?

Edward shakes his head unambiguously.  Will already has his finger on the orange "nurse call" button, but doesn't push it.  

WILL (CONT'D)
What can I do?  Can I help?  Can I get you something?  Water?

Edward nods.  Will pours a glass from the pitcher on the nightstand.  He holds it to his father's lips, but Edward won't drink.  He pushes it away.  He wanted something else.

EDWARD
(whispering)
The river.

WILL
The river?

It takes Edward all his strength to put together each thought.  It's like he's only half-there, fighting to hang on to this world.

EDWARD
Tell me how it happens.

WILL
How what happens?

EDWARD
How I go.

ON WILL, realizing...

WILL
You mean what you saw in The Eye?

Edward nods.  Yes, that's what he was trying to say.

A long beat.

WILL  (CONT'D)
I don't know that story, Dad.  You never told me that one.

Will pushes his fingers under his father's heavy hand, and holds it.  There's nothing else to do.

Edward looks around, confused and increasingly scared.  He sees the end approaching, but doesn't know exactly what's coming.  Without the story, he's lost.

Fighting the urge to panic --

WILL (CONT'D)
I can try, Dad.  If you help.  Just tell me how it starts.

EDWARD
Like this.

WILL
Okay.  Okay.

Will looks around the room, increasingly desperate.  He looks to the nurse call button.  He really wants to press it.  

ON EDWARD, waiting for Will to begin.

WILL  (CONT'D)
Okay.  It's morning, and you and I are in the hospital.  I'd fallen asleep in the chair.  I wake up and I see you, and...

CUT TO:

INT.  HOSPITAL ROOM - DAY [STORY VERSION]

WILL
Dad?

It's dawn, and the first golden glow is shining through the vertical blinds. 

WILL (CONT'D)
(louder and concerned)
Dad?

We LOOK OVER to find a nimble Edward sitting up in bed, combing his hair.  

EDWARD
Let's get out of here.

WILL (V.O.)
Somehow, you're better.  Different.  You're getting ready to go.  And I say...

WILL 
Dad, you're in no condition to...

But Edward throws back the covers.

EDWARD
There's a fold-up wheelchair in the bathroom.  Wrap a blanket around me.  As soon as we get off this floor, we'll be in the clear.

Will heads for the bathroom.  Sure enough, the wheelchair is there.

EDWARD (CONT'D)
Hurry!  We don't have much time.

INT.  HOSPITAL HALLWAY - DAY

With the blanket draped over his head like a ghost, Edward points for his son to steer the wheelchair thataway.

EDWARD
Faster!

They pass a HEAVYSET NURSE, who turns to look.

Rounding a corner, they nearly crash into Dr. Bennett.

DR. BENNETT
Will!  I...What are you doing?

Before he can answer, Will spots Edward rolling the chair himself, pumping both arms.  Will dashes to catch up with him.

The Heavyset Nurse leans out of Edward's hospital room.

NURSE
Security!  Stop them!

DOWN THE HALL

At the elevators, Sandra and Josephine step out to find Will and Edward barreling straight at them.

EDWARD
No time to explain!  Follow us!

Seeing SECURITY GUARDS heading their way, a quick-thinking Sandra shoves a nearby cart into them, bowling them down.

INT.  ELEVATOR - DAY

Will brakes hard, sliding with both feet.  The chair nearly crashes into the back wall as the doors close.

EXT.  PARKING LOT - DAY

Will races Edward down the row, finally reaching the Chevrolet.

AT THE CAR

Will lifts his father out of the chair.  

WILL (V.O.)
I pick you up and you hardly weigh anything.  I can't explain it.

Will sets him in the passenger seat.

EDWARD
Water.  I need water.

Scrambling in back, Will finds a liter of Arrowhead.  Hands it off.  Edward unscrews the cap, but instead of drinking it, he douses himself.  Soaks the blanket.

Will pops the trunk.  Starts to fold up the wheelchair.

EDWARD (CONT'D)
Leave it!  We won't need it.

TIRES SMOKE as the car peals out.

BACK TO:

INT.  HOSPITAL ROOM - DAY [REALITY]

TIGHT ON Will, trying to hold back tears as he talks.

WILL
And we have to take Glenville to avoid all the church traffic, because those damn church people drive too slow.

TIGHT ON Edward, enjoying that detail.  He's focused completely on Will's story.

WILL (CONT'D)
I ask...

BACK TO:

EXT.  GLENVILLE BLVD. - DAY [STORY VERSION]

The Chevy slaloms through the Sunday-morning traffic.

WILL (O.S.)
Where are we headed?

WILL (V.O.)
You say...

INT.  CHEVY - DAY

EDWARD
The River!

Will stops short, the traffic backed up.  He HONKS, trying to get around the jam.  But it's no use.

Then, up ahead, the cars start moving, shoved aside by massive hands.  It's Karl the Giant, clearing a path by brute force.

Edward leans out the window and waves.  Karl waves back.

EXT.  ASHTON RIVER - DAY

The same stretch of the river where it all began.  A CROWD of more than 100 waiting.  

WILL (V.O.)
As we get closer to the river, we see everybody's already there.  And I mean everybody.

Amos Calloway is here with the circus folk, including Mr. Soggybottom.  We also find Edward's Mother and Father, the Mayor, and many others from along the way.  No one has aged a day since we saw them last.

While Ping scans the horizon, Jing nuzzles with her boyfriend, Norther Winslow.  It's Ping who first spots the Chevrolet.

PING
He's here!

The crowd CHEERS.  The Ashton marching band PLAYS.  Jenny Hill smiles.  So does the Old Woman.

We PUSH IN on the Old Woman's glass eye, where we see...

YOUNG EDWARD

reflected.  This is what he saw.

INT.  THE CHEVROLET - DAY

Amazed, Will turns to his father.

WILL
It's unbelievable.

EDWARD
Story of my life.

EXT.  RIVERSIDE - DAY

Will gets out of the Chevrolet, overwhelmed by the crowd.  Behind him, Sandra, Josephine and Dr. Bennett pull up.  Karl comes just after that.

Crossing to the passenger side, Will lifts his father out.  Strangely, he's gotten even lighter.  Will carries him easily.

Edward pulls off his shoes, tying the laces together.  He hands them to Josephine.  She throws them up at the powerline.  They loop over.  APPLAUSE and CHEERS.

The crowd parts to let Will and Edward get to the river.  As he passes, Edward shakes some hands, pats some people on the cheek, and gives others a good poke in the ribs.

WILL (V.O.)
And the strange thing is, there's not a sad face to be found.  Everyone's just so glad to see you, and send you off right.

Will walks into the river, up to his knees.  He turns back so his father can face the crowd.  Edward waves.

EDWARD
Goodbye everybody!  Farewell!  Adieu!

THE CROWD (VARIOUS)
Goodbye Edward! / See ya! / We'll miss you!

But one face is missing from the crowd -- Sandra.  Will turns to see she's already standing in the river beside them.

The reflection of the light off the water gives Sandra an unearthly glow.  She's more tranquil and more beautiful than we've ever seen her.

EDWARD
My girl in the river.

She kisses him.  He tweaks her chin.  The crowd HOLLERS in approval, but their moment remains strangely private.  Only Will is there to witness.

As the kiss ends, Edward tries to pull off his wedding ring.  But it's stuck.  Finally, he sucks on it, pulling it free with his teeth.

A look to Will, a smile with a glint of gold.  Will takes the ring out of his mouth.

Edward suddenly drops out of Will's arms with a SPLASH.  For he's no longer a man, but rather

A FAT CATFISH

swimming at his feet.

We watch as the catfish circles, then heads for deeper water, disappearing.

Will and his mother stand knee-deep in the water, watching Edward Bloom swim away into the sunlight.  Josephine is back on the shore, along with the entire crowd.

MUSIC BUILDS to a climax, then...

Down the river, a GIANT FISH suddenly jumps out of the water, cutting a beautiful arc across the sunset.  It then dives back under with a SPLASH.

CROSSFADE BACK TO:

INT.  HOSPITAL ROOM - DAY

Will has tears hanging in the corners of his eyes.

WILL
You become what you always were.  A very big fish.  
(he smiles)
And that's the way it happens.

EDWARD
(a whisper)
Yes.  Exactly.

Edward smiles, proud of both of them.   His eyes are so pale and so open, we can almost see his soul.  In every atom of his body, in every thought, Edward Bloom is entirely happy.  

And this is how he goes.

INT.  HOSPITAL HALLWAY - DAY

Will shuts the door to his father's room behind him.  The walk to the payphones seems to take a lifetime.

He finds a quarter, starts to dial.  He has to squint to see through the water in his eyes.   It's ringing.  And ringing.  The other end answers.

WILL
(voice cracking)
Hi.

That's all he can get out before the dam breaks inside him.  He presses closer to the phone, trying to shield himself.

MUSIC begins that will carry us through the next passage.

INT.  HOSPITAL RECEPTION - DAY

Will waits at reception as Sandra and Josephine come off the elevator.

INT.  GUEST ROOM - DAY

Josephine opens the curtains, letting white sunlight in.  She strips the bed.

INT.  BEDROOM - DAY

Will and his mother pick out one of Edward's ties, for Will to wear at the funeral.  Will tries to button the cuffs on the shirt he borrowed, but they're the kind that need links.

He goes through the top drawer of the dresser, trying to find a matching pair.  Further down, he finds a ribbon tied to 

THE KEY TO THE CITY.

He smiles, disbelieving.  It's a real thing.

EXT.  CEMETERY / ROAD - DAY

Will helps his mother out of a black sedan.  She's well-composed, not nearly the wreck we might have expected.  

Josephine hugs Dr. Bennett and shakes hands with his WIFE.  The service is crowded, more than 200 people, many more than expected.  

As his mother talks to a WELL-WISHER, Will looks left to see an Oldsmobile parking.

CLOSE ON the license plates.  Missouri.

The passenger side opens, but the man who steps out is barely visible over the door.  He shuts it to reveal himself to be 70.

It's Amos Calloway.  Will doesn't recognize him.

The Driver climbs out, a size 15 foot on the gravel.  We TILT UP to see this man is huge.

This man is KARL, now 55.  He's not 12 feet tall, but at least six-eight.

CLOSE ON Will, bewildered to see that this man really exists. 

EXT.  CEMETERY / GRAVESIDE - DAY

As the service gets ready to begin, Will guides his mother to a seat near the grave.

Sitting beside Will, Josephine spots a stunning ASIAN WOMAN (50) behind them.  A beat later, an identical face with glasses peers out -- the woman's twin sister.  

It's PING and JING.

Josephine almost GASPS.  She elbows Will, who turns to look.  From this angle, the sisters seem conjoined, but then Jing steps forward.  They're really two separate people.

A sea of familiar faces, all of them aged through the years:  BEAMEN, NORTHER WINSLOW, the MAYOR, and ZACKY PRICE.

EXT.  CEMETERY - DAY [LATER]

After the service, we see the crowd gathered in small groups.  By the LAUGHTER and hand gestures, we can see they're telling stories.  They're telling Edward's stories.

We find Will watching them.

WILL (V.O.)
Have you ever heard a joke so many times you've forgotten why it's funny?  But then you hear it again and suddenly it's new.  You remember why you loved it in the first place.

Will joins in, laughing.

We slowly CIRCLE BEHIND a monument, letting it black out the screen.  

TRANSITION TO:

EXT.  BLOOM HOUSE BACKYARD - DAY [SUMMER]

Will sits on the porch with Sandra and Josephine, watching his SON play in the pool with two NEIGHBOR KIDS.

SON
(to the other boys)
So he said he'd fight the giant who was fifteen feet tall.

KID
No way.

SON
(calling over)
Dad, that's right, isn't it?

WILL
Something like that.

SON
See.  So he was a giant but my grampa was going to fight him because he wasn't afraid of anything because he'd seen how he was going to die in this old lady's glass eye...

Will smiles as his son continues the tale, which FADES.  Sandra takes Will's hand in hers, just listening.

WILL (V.O.)
That was my father's final joke I guess.  A man tells his stories so many times that he becomes the stories.  They live on after him.

CROSSFADE TO:

EXT.  RIVER / UNDERWATER - DAY

A fat and happy catfish swims towards us.

WILL (V.O.)
And in that way, he becomes immortal.

The fish passes us with a SPLASH.

CUT TO BLACK.

> _**THE END**_





`;var o=e.parse(t).html.script;return console.log(e.tokens),O(async a=>{}),R(async()=>{}),v(async()=>{}),(a,h)=>(H(),L(S,{class:"q-pa-xl"},{default:Y(()=>[X,N("div",{innerHTML:C(o)},null,8,z)]),_:1}))}});export{ee as default};
