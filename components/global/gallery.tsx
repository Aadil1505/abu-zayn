/* eslint-disable @next/next/no-img-element */

import { BlurFade } from "../ui/blur-fade"

const images = [
  "https://d1w7312wesee68.cloudfront.net/5Kgjx8xSKKZdM2E4kFu40i-tXSitnklAI7JCtaeNZ44/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/eff7244f-ec27-4937-a2eb-a040cb292095.jpg",
  "https://d1w7312wesee68.cloudfront.net/dyWnBTkQ51X4NsDxgTeTC_KP22zHXRlh203D2ATdfic/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/3ff5df1d-aff4-497c-8d05-125ce120f3b7.jpg",
  "https://d1w7312wesee68.cloudfront.net/eqhke1iistTPnN8PuGAZ6boEO3dQIfdyQXX896IZuPw/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/2ccd34f2-3a32-413e-afb9-91eb53cdc04b.jpg",
  "https://d1w7312wesee68.cloudfront.net/vyiCzXk_rad4_kcQ23wni9z7AhUfedbDbnY2k-zIaOQ/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/0f88ba83-0a07-4577-bda9-cfa8735f98c1.jpg",
  "https://d1w7312wesee68.cloudfront.net/tBRBtmiecTHt5CuOu-GrGzlt4rCQl35Hgpd8o4rKYIk/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/7300d20d-953c-4cf5-aa0b-ad3f9b9103d3.jpg",
  "https://d1w7312wesee68.cloudfront.net/Sad86R3CiWAfJ0iMp-nyb5VwDf4DF2XrvpuM3qWdp-Y/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/72362c7f-5408-4ebb-9a5e-9d1031d37f1b.jpg",
  "https://d1w7312wesee68.cloudfront.net/ut4cO_t3tBYrY0jQyLiUnnyR3lb8cLWnp1F4lM6zSEg/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/b61e7f4f-6051-4cb0-996d-2aca9bd09b1b.jpg",
  "https://d1w7312wesee68.cloudfront.net/f-zZhy5VsiCRcZaeahepFWApiqSioJFrdubkEUVZCJw/resize:fit:720:720/plain/s3://toasttab/menu_service/restaurants/ac33c347-9510-4e63-88a8-3126d3681256/MenuItem/6ba8865e-eac0-49a2-9173-a05a6ca2a033.jpg"
]

export function Gallery() {
  return (
    <section id="photos" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-blinds font-medium tracking-widest text-foreground mb-6">
            GALLERY
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            A glimpse into our culinary artistry and warm dining atmosphere
          </p>
        </div>

        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Gallery image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}