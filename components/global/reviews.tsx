import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
// import { Marquee } from "@/registry/magicui/marquee"

const reviews = [
  {
    name: "Wessam",
    body: "Abu Zayn is hands down one of the BEST local dining experiences I've ever had! We went for lunch, and from the moment our group walked in, the owner, Omar, welcomed us like family.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUJWlWND_ZFeAkrxcHdNIrb_GiKTlLl3Pm9FnhXd57Pq73VRpAk2Q=w144-h144-p-rp-mo-ba5-br100",
  },
  {
    name: "Samir Nawaz",
    body: "New Egyptian spot in Long Island. Small location with limited seating, about 5 to 6 tables, so it definitely gets packed (which means food is good) Place got a nice vibe, good decor and EXCELLENT customer service.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjW4lRHztkBoR289SSI0fZzbiIIlFclvIDJqasl4TZ2Ye3t1pfeG=w144-h144-p-rp-mo-ba5-br100",
  },
  {
    name: "Rifat Islam",
    body: "Abu Zayn has quickly become one of our favorite spots on Long Island. This was our third visit since it opened, and every time the food and experience get even better. It's such a treat to finally have authentic halal Egyptian food nearby",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXLhMh-WCq0JzhetrC7Wy7s8ZBA3ZC1TNEbeBozOW4nQZ1Z_1k=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Courtney Stern",
    body: "The best Egyptian food on Long Island. 💕🙏❤️ The marinated Shawarma meats on hanging skewer were so flavorful. We tried the chicken and beef Shawarma platter, eggplant side, Egyptian salad, and fries. All the flavors blended so nicely.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocKF-vJhqqbq0i44GN--xTmMYWGZelVR3QW-K-hMZQMjk5BtWA=w144-h144-p-rp-mo-ba2-br100",
  },
  {
    name: "Torri Serv",
    body: "This was my first time trying a chicken shawarma bowl, and I'm glad I tried it here. The chicken was tender, rice perfectly cooked, and everything tasted really fresh. The price felt reasonable for the portion and quality.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocKH55jp-bj38NgiPWvENDsaIbRmjArx1ikGWLPJ4j2maX81Kg=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Sewdat Ramgoolam",
    body: "Mixed grill and humus were the best we had around. Lots of flavor and very tender. Can't wait to expolore the rest of the menu.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocLf-UX_U14UiHEvRgL1_1c4auXkXcRfA3tmTZfo5eHfMNC0OQ=w144-h144-p-rp-mo-br100",
  },
  {
    name: "SAAD V",
    body: "What??!! Halal kebab spot in Rockville center. Couldn't wait, went right for it. A decent meal with kebab and rice.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocLRIHd9rTklqNMtnhCS06qEQO1ygsxEznvwNpIUEwl4ZuDInw=w144-h144-p-rp-mo-ba3-br100",
  },
  {
    name: "Ricardo Lopes",
    body: "I was used to be set in my ways, my taste buds are used to the same stuff. When I came in here and tasted the food. I was pleasantly surprised. Everything was fresh, flavors amazing. Every time I came in I was not disappointed.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUE_1vGGEvE7RULBsZFaGnrqJXCRuiIlrHQCjPEgry2alyUuVBn=w144-h144-p-rp-mo-ba4-br100",
  },
  {
    name: "Maha Irfan",
    body: "THE BESTTT EGYPTIAN food in NY!!! I went in after a nice workout and was starving! The hummus platter was super fresh and the naan was right off the oven! We got shish tawook platter and chicken shawarma platter, both were loaded",
    img: "https://lh3.googleusercontent.com/a/ACg8ocLfb89GhttmwLwBZ5zE_k1pNFiyd9pgIX9e3774wZkPC-K3I8w=w144-h144-p-rp-mo-ba3-br100",
  },
  {
    name: "Jae E",
    body: "My boyfriend has been raving about this place so I had to try it for myself. Literally a 10/10 experience as far as food , service and ambiance. I had the fried shrimp pita with white sauce on the side, amazing!",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXpAB5YWKdhSwyV9jUxCh2N3ia21NnixC9VhOKhgp3ry8wWUH9m=w144-h144-p-rp-mo-ba3-br100",
  },
  {
    name: "Yasmine Zada",
    body: "The food and service were both amazing! I had the Kofta bowl, definitely some of the best Kofta I have had around here. The staff were all super nice and the place was very clean!",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJdAlLBnHDqsiP1TUjkBrnYyzi1AnJ7mdBzqI_krvD7wdlMmg=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Max Bolanos",
    body: "Spot by for lunch with my girlfriend and I was very surprised. The food was delicious and for the price the portions were massive. The chef who I found out is the owner made me feel very welcomed and like we've been friends for a while.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocIxFA1G-Rt8eM7ir5N8xmOeC9GmYjTGoU2PdURRNvNpG8LIKQ=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Ali Imran",
    body: "Best Egyptian food I've had in NY hands down. My wife and I loved the mixed grill platter and for dessert we had Umm Ali and creme brulee. The owner's hospitality is off the charts and we will be coming back Insh'Allah.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUF2GMa6DZfOr7K1o2Y0tlcKzLavQU8J5eo8pj-YtrWF5tgU3JKOA=w144-h144-p-rp-mo-ba3-br100",
  },
]


const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string
  name: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm line-clamp-4">{body}</blockquote>
    </figure>
  )
}

export function Reviews() {
  return (
    <>
    
    <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest text-foreground mb-6">
              REVIEWS
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
              The People Love Us 
            </p>
          </div>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
    </>
  )
}