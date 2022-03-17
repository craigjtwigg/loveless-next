import reviewImg01 from './public/assets/reviewimage01.jpg';
import reviewImg02 from './public/assets/reviewimage02.jpg';
import reviewImg03 from './public/assets/reviewimage03.jpg';
import reviewImg04 from './public/assets/reviewimage04.jpg';

export const addGoogleReview = 'https://search.google.com/local/writereview?placeid=ChIJRfrUGVWSe0gR_H_eIsd_5DI'

export const faqData = [
  {
    question: 'Where are you based?',
    answer: `The recording studio is based in Colne, Lancashire, which is approx. 45 mins from Manchester, an hour from Leeds & Liverpool and about an hour and half from Sheffield (to give you an idea). The postcode is BB8 9PE.`,
  },
  {
    question: 'How can I speak to you about making a record? ',
    answer: `Fill in the contact form, email matt@suffstudio.co.uk or contact me through my facebook page.`,
  },
  {
    question: 'What do I need to bring to the studio? ',
    answer: `I have everything you need to make a standard rock record except cymbals, so please bring at least those.`,
  },
  {
    question: 'What recording equipment and musical gear do you have? ',
    answer: `Most of my gear is listed on my GEAR PAGE, I'm always buying gear though so it's always expending and I usually get a new 'toy' for every record I make. All my gear is available to use, free of charge. `,
  },
  {
    question: 'How long is my record likely to take?',
    answer: `Records vary in time, but for a fairly standard rock band I usually suggest around a day and a half per song for recording.  Editing and mixing usually takes a day per song.`,
  },
  {
    question: `Do you do audio mastering too? `,
    answer: `I prefer not to master my own mixes as I think a third pair of ears always works better at the mastering stage. That said, I always give my mixes a 'light master' to bring it up to a commercial loudness. Sometimes clients are happy with this but I'll always suggest someone else to sprinkle their own magic dust on it if funds allow. Vise-versa too - I'm always up for mastering other people's mixes!`,
  },
  {
    question: `What are your recording rates?`,
    answer: `Rates depend entirely on the project but for an idea, a single for a standard rock band starts at £240 
CONTACT FOR A QUOTE.`,
  },
  {
    question: `What strings and skins do you recommend?`,
    answer: `I'm not overly fussy about strings to be honest but the super cheap £3 type packs are no good. You'll be fine with anything by ernie ball, elixir, dunlop, rotosound, d'adarrio, DR. Higher gauge strings tend to hold tuning and bend less when you press on so are better for recording; so the thicker you can stand the better. 

My personal favourite drum skins on snare and toms for rock music are Remo Emperor coated skins. They sound great for recording and are pretty durable. Single ply skins can sound great but they die too quickly. Other decent snare skins are Remo Emperor X, Evans HD dry,  For kick drum you can't beat Evans EMAD skins. I try to avoid skins that are overly dampened (such as Remo Pinstripes) as it limits my options to how much resonance I can keep or kill. `,
  },
];

export const gearData = [
  {
    category: 'guitars & basses',
    name: 'Fender Jaguar',
    description:
      'Mexican made Fender Jaguar with a double humbucking configuration - fitted with a set of Bareknuckle Pickups.',
  },
  {
    category: 'guitars & basses',
    name: 'Fender Mustang',
    description:
      'Mexican made Fender Mustang fitted with a Serymour Duncan Hot Rails pickup in the bridge position.',
  },
  {
    category: 'guitars & basses',
    name: 'Fender Jazz Bass',
    description:
      'Mexican Fender Jazz bass fitted with Seymour Duncan Quarter Pounder pickups',
  },
  {
    category: 'amps & cabs',
    name: 'Vox AC30',
    description: '2x12 Vox AC30 combo amp, perfect for glorious clean tones.',
    video: 'n8M6VjhCZ1c',
  },
  {
    category: 'amps & cabs',
    name: 'Marshall JCM800 (Head)',
    description: 'Classic Marshall JCM800 head!.',
    video: 'zOTrBqRNq_I',
  },
  {
    category: 'pedals',
    name: 'ZVex Fuzz Factory',
    description:
      'A wild boutique fuzz pedal with a wide variety of glitchy, rippping tones!',
    video: 'sIrf8M2AkWs',
  },
  {
    category: 'pedals',
    name: 'Strymon Big Sky',
    description:
      'An  incredibly versitile reverb machine with super fine control.',
    video: 'Z-6k1umVc04',
  },
  {
    category: 'drums',
    name: 'Mapex Black Panther Snare',
    description:
      'A high-performance, 14x6" maple snare with excellent articulation and crisp attack.',
    video: 'x-cvZ5pkdMk',
  },
  {
    category: 'drums',
    name: 'Vintage 80s Yamaha Stage Classic Mahogony drum kit',
    description: '',
  },
  {
    category: 'microphones',
    name: 'Shure SM58',
    description:
      'The iundustry standard microphone! We have 2 SM58s here at Lovelesss.',
    video: 'pNAVavFzI0E',
  },
  {
    category: 'microphones',
    name: 'AKG C414 XLS',
    description:
      'A top tier condenser mic from AKG - We have 2 here at Lovelesss.',
    video: 'WuIH8cjq_NM',
  },
  {
    category: 'monitoring',
    name: 'Focal Twin 6 BE Studio Monitors',
    description: '',
  },
  {
    category: 'monitoring',
    name: 'Vic Firth drummer isolation headphones',
    description: '',
  },
  {
    category: 'outboard & i/o',
    name: 'RME Fireface 802',
    description: '',
  },
  {
    category: 'outboard & i/o',
    name: 'Audient ASP 880',
    description: '',
  },
];

export const reviewData = [
  {
    author: 'Kevin Shields, My Bloody Valentine',
    imageSrc: reviewImg01,
    review:
      'Matt at Loveless blew my mind! He really nailed our sound. 100% recommend!',
    stars: 5,
  },
  {
    author: 'Steve Albini',
    imageSrc: reviewImg02,
    review:
      'I usually record my own bands but Matt always manages to get the drum sound just right in a way I could only wish to achieve.',
    stars: 5,
  },
  {
    author: 'Craig Twigg, Infants',
    imageSrc: reviewImg03,
    review:
      'Matt at Loveless always absolutely nails our sound and manages to help us develop and shape the songs without being intrusive in any way. Lovely dude, lovely studio, lovely sounds.',
    stars: 5,
  },
  {
    author: 'Bobby Pook, Blanket',
    imageSrc: reviewImg04,
    review:
      'Great attention to detail and fast delivery on a project we did with Matt and Sony Music / Music For Nations',
    stars: 5,
  },
];
