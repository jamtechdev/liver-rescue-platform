import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Find Your Support Buddy",
    text: "Connect with someone who shares your challenges on the Medical Medium path.",
    highlight: false,
    img: "/images/icons/happy.png",
  },
  {
    title: "Build Meaningful Relationships",
    text: "Use our dating feature to find friends or a romantic partner.",
    highlight: true,
    img: "/images/icons/heart.png",
  },
  {
    title: "Share Healing Recipes",
    text: "Discover and exchange Medical Medium recipes with the community.",
    highlight: false,
    img: "/images/icons/recepe.png",
  },
  {
    title: "Community Support",
    text: "Join discussions and learn from others on the same healing path.",
    highlight: false,
    img: "/images/icons/community.png",
  },
];

const recipes = [
  { id: 1, title: 'Liver-Loving Beet Soup', tags: 'Liver Detox, Vegan, Gluten-Free', image: 'images/recepe.png' },
  { id: 1, title: 'Liver-Loving Beet Soup', tags: 'Liver Detox, Vegan, Gluten-Free', image: 'images/recepe2.png' },
  { id: 1, title: 'Liver-Loving Beet Soup', tags: 'Liver Detox, Vegan, Gluten-Free', image: 'images/recepe3.png' },
  { id: 1, title: 'Liver-Loving Beet Soup', tags: 'Liver Detox, Vegan, Gluten-Free', image: 'images/recepe4.png' },
  { id: 1, title: 'Liver-Loving Beet Soup', tags: 'Liver Detox, Vegan, Gluten-Free', image: 'images/recepe4.png' },
  { id: 1, title: 'Liver-Loving Beet Soup', tags: 'Liver Detox, Vegan, Gluten-Free', image: 'images/recepe6.png' },

];
export default function FeatureSection() {
  return (
    <section className="border-t border-sky-100 bg-sky-50/50 px-4 py-12 pb-0 sm:px-6 ">
      <div className="max-w-7xl mx-auto relative">

        {/* Custom navigation buttons */}
        <div className=" swiper-button-prev bg-white ">

          <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C10 0.954 9.08375 2.37857 8.15625 3.57429C6.96375 5.11714 5.53875 6.46329 3.905 7.49057C2.68 8.26071 1.195 9 0 9M0 9C1.195 9 2.68125 9.73929 3.905 10.5094C5.53875 11.538 6.96375 12.8841 8.15625 14.4244C9.08375 15.6214 10 17.0486 10 18M0 9H30" stroke="black" />
          </svg>

        </div>

        <div className="swiper-button-next bg-white ">

          <svg width="30" height="18" viewBox="0 0 30 18" fill="red" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C20 0.954 20.9163 2.37857 21.8438 3.57429C23.0363 5.11714 24.4612 6.46329 26.095 7.49057C27.32 8.26071 28.805 9 30 9M30 9C28.805 9 27.3187 9.73929 26.095 10.5094C24.4612 11.538 23.0363 12.8841 21.8438 14.4244C20.9163 15.6214 20 17.0486 20 18M30 9H0H30Z" fill="#2570FF" />
            <path d="M20 0C20 0.954 20.9163 2.37857 21.8438 3.57429C23.0363 5.11714 24.4612 6.46329 26.095 7.49057C27.32 8.26071 28.805 9 30 9M30 9C28.805 9 27.3187 9.73929 26.095 10.5094C24.4612 11.538 23.0363 12.8841 21.8438 14.4244C20.9163 15.6214 20 17.0486 20 18M30 9H0" stroke="#0057FF" />
          </svg>

        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-3 rounded-3xl border-2 ${slide.highlight
                  ? "border-indigo-500 bg-[#f3f5fb]"
                  : "border-white/50 bg-[#f3f5fb]"
                  }`}
              >
                <div className="bg-[#f7f8fc] rounded-3xl p-12 h-full">
                  <div
                    className={`w-20 h-20 rounded-full mb-8 flex items-center justify-center ${slide.highlight ? "bg-indigo-500" : "bg-[#E4F4FF]"
                      }`}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#2c2350] mb-4">
                    {slide.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {slide.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto  p-10 md:p-16 mt-24 bg-border-img">

        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src="/images/about.png"
              alt="Community discussion"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#2c2350] leading-tight mb-6">
              Your Medical Medium <br />
              Community for <br />
              Connection
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              At Liver Rescue Co., we believe no one should face chronic illness
              alone. Our platform is a safe, vibrant hub for those embracing a
              Medical Medium lifestyle, designed to help you find friends, a
              partner, or a supportive community. Connect, share, and grow with
              others who truly understand your healing journey.
            </p>

            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-600 transition">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>


      <section className="find-perfect-section relative">
        <svg preserveAspectRatio="none" id="Group_1321317155" class="pointer-events-none" width="1920" height="772" viewBox="0 0 1920 772" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M93.3185 365.398H0V696.254H93.3185V365.398Z" fill="url(#_12_20__paint0_linear_12_20)"></path><path d="M204.211 272.686H78.7773V758.063H204.211V272.686Z" fill="url(#_12_20__paint1_linear_12_20)"></path><path d="M369.639 227.239H204.211V696.255H369.639V227.239Z" fill="url(#_12_20__paint2_linear_12_20)"></path><path d="M456.899 349.037H369.641V696.255H456.899V349.037Z" fill="url(#_12_20__paint3_linear_12_20)"></path><path d="M496.887 301.771H413.266V734.43H496.887V301.771Z" fill="url(#_12_20__paint4_linear_12_20)"></path><path d="M515.065 252.689H444.168V734.431H515.065V252.689Z" fill="url(#_12_20__paint5_linear_12_20)"></path><path d="M490.226 292.681H462.957V727.157H490.226V292.681Z" fill="url(#_12_20__paint6_linear_12_20)"></path><path d="M526.583 349.037H501.133V714.433H526.583V349.037Z" fill="url(#_12_20__paint7_linear_12_20)"></path><path d="M622.933 196.334H542.945V714.432H622.933V196.334Z" fill="url(#_12_20__paint8_linear_12_20)"></path><path d="M570.215 381.757H513.859V659.894H570.215V381.757Z" fill="url(#_12_20__paint9_linear_12_20)"></path><path d="M622.927 141.796H562.938V558.093H622.927V141.796Z" fill="url(#_12_20__paint10_linear_12_20)"></path><path d="M646.565 150.28H592.938V621.114H646.565V150.28Z" fill="url(#_12_20__paint11_linear_12_20)"></path><path d="M684.737 179.972H633.836V659.895H684.737V179.972Z" fill="url(#_12_20__paint12_linear_12_20)"></path><path d="M701.103 301.771H675.652V727.16H701.103V301.771Z" fill="url(#_12_20__paint13_linear_12_20)"></path><path d="M742.916 349.037H688.379V696.255H742.916V349.037Z" fill="url(#_12_20__paint14_linear_12_20)"></path><path d="M791.992 319.95H715.64V714.432H791.992V319.95Z" fill="url(#_12_20__paint15_linear_12_20)"></path><path d="M777.453 292.681H742.914V518.098H777.453V292.681Z" fill="url(#_12_20__paint16_linear_12_20)"></path><path d="M824.718 365.398H777.453V696.254H824.718V365.398Z" fill="url(#_12_20__paint17_linear_12_20)"></path><path d="M853.804 341.766H811.992V714.435H853.804V341.766Z" fill="url(#_12_20__paint18_linear_12_20)"></path><path d="M882.891 319.95H844.715V758.063H882.891V319.95Z" fill="url(#_12_20__paint19_linear_12_20)"></path><path d="M915.613 292.681H853.805V714.432H915.613V292.681Z" fill="url(#_12_20__paint20_linear_12_20)"></path><path d="M930.156 263.596H871.984V714.435H930.156V263.596Z" fill="url(#_12_20__paint21_linear_12_20)"></path><path d="M988.328 285.411H930.156V714.433H988.328V285.411Z" fill="url(#_12_20__paint22_linear_12_20)"></path><path d="M1008.33 238.146H942.883V634.446H1008.33V238.146Z" fill="url(#_12_20__paint23_linear_12_20)"></path><path d="M1019.23 189.063H975.602V652.624H1019.23V189.063Z" fill="url(#_12_20__paint24_linear_12_20)"></path><path d="M1039.84 298.944H1010.75V677.065H1039.84V298.944Z" fill="url(#_12_20__paint25_linear_12_20)"></path><path d="M1081.04 349.944H1025.29V727.157H1081.04V349.944Z" fill="url(#_12_20__paint26_linear_12_20)"></path><path d="M1117.6 373.679H1057.61V621.114H1117.6V373.679Z" fill="url(#_12_20__paint27_linear_12_20)"></path><path d="M1164.86 395.495H1103.05V642.726H1164.86V395.495Z" fill="url(#_12_20__paint28_linear_12_20)"></path><path d="M1206.07 319.95H1142.45V714.432H1206.07V319.95Z" fill="url(#_12_20__paint29_linear_12_20)"></path><path d="M1206.07 298.944H1155.77V610.005H1206.07V298.944Z" fill="url(#_12_20__paint30_linear_12_20)"></path><path d="M1218.59 160.986H1167.69V530.827H1218.59V160.986Z" fill="url(#_12_20__paint31_linear_12_20)"></path><path d="M1228.49 82.8164H1193.14V659.898H1228.49V82.8164Z" fill="url(#_12_20__paint32_linear_12_20)"></path><path d="M1256.77 277.331H1213.64V677.064H1256.77V277.331Z" fill="url(#_12_20__paint33_linear_12_20)"></path><path d="M1303.02 365.398H1235.2V714.435H1303.02V365.398Z" fill="url(#_12_20__paint34_linear_12_20)"></path><path d="M1344.83 333.684H1290.3V727.157H1344.83V333.684Z" fill="url(#_12_20__paint35_linear_12_20)"></path><path d="M1413.91 179.972H1303.02V771.798H1413.91V179.972Z" fill="url(#_12_20__paint36_linear_12_20)"></path><path d="M1439.36 126.446H1390.28V758.062H1439.36V126.446Z" fill="url(#_12_20__paint37_linear_12_20)"></path><path d="M1504.81 252.689H1430.27V714.435H1504.81V252.689Z" fill="url(#_12_20__paint38_linear_12_20)"></path><path d="M1539.35 381.757H1488.45V727.157H1539.35V381.757Z" fill="url(#_12_20__paint39_linear_12_20)"></path><path d="M1578.53 310.052H1516.72V696.252H1578.53V310.052Z" fill="url(#_12_20__paint40_linear_12_20)"></path><path d="M1632.06 194.516H1539.35V729.785H1632.06V194.516Z" fill="url(#_12_20__paint41_linear_12_20)"></path><path d="M1653.87 285.411H1612.06V714.433H1653.87V285.411Z" fill="url(#_12_20__paint42_linear_12_20)"></path><path d="M1681.14 252.689H1653.88V727.16H1681.14V252.689Z" fill="url(#_12_20__paint43_linear_12_20)"></path><path d="M1701.14 160.986H1667.51V714.433H1701.14V160.986Z" fill="url(#_12_20__paint44_linear_12_20)"></path><path d="M1713.87 206.432H1708.41V714.432H1713.87V206.432Z" fill="url(#_12_20__paint45_linear_12_20)"></path><path d="M1730.33 381.757H1696.7V742.71H1730.33V381.757Z" fill="url(#_12_20__paint46_linear_12_20)"></path><path d="M1761.24 333.684H1730.34V771.798H1761.24V333.684Z" fill="url(#_12_20__paint47_linear_12_20)"></path><path d="M1795.77 344.594H1761.23V732.612H1795.77V344.594Z" fill="url(#_12_20__paint48_linear_12_20)"></path><path d="M1841.23 319.95H1786.69V742.711H1841.23V319.95Z" fill="url(#_12_20__paint49_linear_12_20)"></path><path d="M1880 214.513H1819.41V742.713H1880V214.513Z" fill="url(#_12_20__paint50_linear_12_20)"></path><path d="M1893.34 277.331H1863.04V729.784H1893.34V277.331Z" fill="url(#_12_20__paint51_linear_12_20)"></path><path d="M1920 313.89H1880.01V736.854H1920V313.89Z" fill="url(#_12_20__paint52_linear_12_20)"></path><path d="M1863.04 96.3491H1849.71V427.206H1863.04V96.3491Z" fill="url(#_12_20__paint53_linear_12_20)"></path><path d="M1214.55 0H1201.62V352.67H1214.55V0Z" fill="url(#_12_20__paint54_linear_12_20)"></path><path d="M901.069 194.516H891.98V517.191H901.069V194.516Z" fill="url(#_12_20__paint55_linear_12_20)"></path></g><defs><linearGradient id="_12_20__paint0_linear_12_20" x1="46.6592" y1="365.398" x2="46.6592" y2="696.254" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint1_linear_12_20" x1="141.494" y1="272.686" x2="141.494" y2="758.063" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint2_linear_12_20" x1="286.925" y1="227.239" x2="286.925" y2="696.255" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint3_linear_12_20" x1="413.27" y1="349.037" x2="413.27" y2="696.255" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint4_linear_12_20" x1="455.077" y1="301.771" x2="455.077" y2="734.43" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint5_linear_12_20" x1="479.616" y1="252.689" x2="479.616" y2="734.431" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint6_linear_12_20" x1="476.591" y1="292.681" x2="476.591" y2="727.157" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint7_linear_12_20" x1="513.858" y1="349.037" x2="513.858" y2="714.433" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint8_linear_12_20" x1="582.939" y1="196.334" x2="582.939" y2="714.432" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint9_linear_12_20" x1="542.037" y1="381.757" x2="542.037" y2="659.894" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint10_linear_12_20" x1="592.932" y1="141.796" x2="592.932" y2="558.093" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint11_linear_12_20" x1="619.751" y1="150.28" x2="619.751" y2="621.114" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint12_linear_12_20" x1="659.286" y1="179.972" x2="659.286" y2="659.895" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint13_linear_12_20" x1="688.378" y1="301.771" x2="688.378" y2="727.16" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint14_linear_12_20" x1="715.648" y1="349.037" x2="715.648" y2="696.255" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint15_linear_12_20" x1="753.816" y1="319.95" x2="753.816" y2="714.432" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint16_linear_12_20" x1="760.184" y1="292.681" x2="760.184" y2="518.098" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint17_linear_12_20" x1="801.085" y1="365.398" x2="801.085" y2="696.254" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint18_linear_12_20" x1="832.898" y1="341.766" x2="832.898" y2="714.435" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint19_linear_12_20" x1="863.803" y1="319.95" x2="863.803" y2="758.063" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint20_linear_12_20" x1="884.709" y1="292.681" x2="884.709" y2="714.432" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint21_linear_12_20" x1="901.07" y1="263.596" x2="901.07" y2="714.435" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint22_linear_12_20" x1="959.242" y1="285.411" x2="959.242" y2="714.433" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint23_linear_12_20" x1="975.605" y1="238.146" x2="975.605" y2="634.446" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint24_linear_12_20" x1="997.417" y1="189.063" x2="997.417" y2="652.624" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint25_linear_12_20" x1="1025.29" y1="298.944" x2="1025.29" y2="677.065" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint26_linear_12_20" x1="1053.16" y1="349.944" x2="1053.16" y2="727.157" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint27_linear_12_20" x1="1087.6" y1="373.679" x2="1087.6" y2="621.114" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint28_linear_12_20" x1="1133.96" y1="395.495" x2="1133.96" y2="642.726" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint29_linear_12_20" x1="1174.26" y1="319.95" x2="1174.26" y2="714.432" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint30_linear_12_20" x1="1180.92" y1="298.944" x2="1180.92" y2="610.005" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint31_linear_12_20" x1="1193.14" y1="160.986" x2="1193.14" y2="530.827" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint32_linear_12_20" x1="1210.81" y1="82.8164" x2="1210.81" y2="659.898" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint33_linear_12_20" x1="1235.21" y1="277.331" x2="1235.21" y2="677.064" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint34_linear_12_20" x1="1269.11" y1="365.398" x2="1269.11" y2="714.435" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint35_linear_12_20" x1="1317.57" y1="333.684" x2="1317.57" y2="727.157" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint36_linear_12_20" x1="1358.47" y1="179.972" x2="1358.47" y2="771.798" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint37_linear_12_20" x1="1414.82" y1="126.446" x2="1414.82" y2="758.062" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint38_linear_12_20" x1="1467.54" y1="252.689" x2="1467.54" y2="714.435" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint39_linear_12_20" x1="1513.9" y1="381.757" x2="1513.9" y2="727.157" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint40_linear_12_20" x1="1547.63" y1="310.052" x2="1547.63" y2="696.252" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint41_linear_12_20" x1="1585.7" y1="194.516" x2="1585.7" y2="729.785" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint42_linear_12_20" x1="1632.97" y1="285.411" x2="1632.97" y2="714.433" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint43_linear_12_20" x1="1667.51" y1="252.689" x2="1667.51" y2="727.16" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint44_linear_12_20" x1="1684.32" y1="160.986" x2="1684.32" y2="714.433" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint45_linear_12_20" x1="1711.14" y1="206.432" x2="1711.14" y2="714.432" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint46_linear_12_20" x1="1713.52" y1="381.757" x2="1713.52" y2="742.71" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint47_linear_12_20" x1="1745.79" y1="333.684" x2="1745.79" y2="771.798" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint48_linear_12_20" x1="1778.5" y1="344.594" x2="1778.5" y2="732.612" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint49_linear_12_20" x1="1813.96" y1="319.95" x2="1813.96" y2="742.711" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint50_linear_12_20" x1="1849.71" y1="214.513" x2="1849.71" y2="742.713" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint51_linear_12_20" x1="1878.19" y1="277.331" x2="1878.19" y2="729.784" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint52_linear_12_20" x1="1900" y1="313.89" x2="1900" y2="736.854" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint53_linear_12_20" x1="1856.37" y1="96.3491" x2="1856.37" y2="427.206" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint54_linear_12_20" x1="1208.09" y1="0" x2="1208.09" y2="352.67" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="_12_20__paint55_linear_12_20" x1="896.525" y1="194.516" x2="896.525" y2="517.191" gradientUnits="userSpaceOnUse"><stop stop-color="#C8DBFF"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
        <div className="find-message">
          <ul>
            <li className="flex items-center gap-4">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>

            <li className="flex items-center gap-4 mt-3">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>

            <li className="flex items-center gap-4 mt-3">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>

          </ul>
        </div>

        <div className="perfect-items">
          <ul>
            <li className="flex items-center gap-4">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>

            <li className="flex items-center gap-4 mt-3">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>

            <li className="flex items-center gap-4 mt-3">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>

            <li className="flex items-center gap-4 mt-3">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7373 15.9695C13.4709 15.7032 13.1096 15.5535 12.7328 15.5535C12.3561 15.5535 11.9948 15.7032 11.7284 15.9695C11.462 16.2359 11.3124 16.5972 11.3124 16.974C11.3124 17.3507 11.462 17.712 11.7284 17.9784L15.9724 22.2224C16.1046 22.3535 16.2614 22.4572 16.4337 22.5276C16.6061 22.598 16.7907 22.6337 16.9768 22.6326C17.1705 22.6265 17.3609 22.5806 17.5361 22.4979C17.7113 22.4152 17.8676 22.2973 17.9954 22.1517L27.8981 10.8343C28.1268 10.5504 28.237 10.1892 28.2059 9.82603C28.1747 9.46284 28.0046 9.1257 27.7309 8.88489C27.4573 8.64407 27.1012 8.51819 26.7371 8.53347C26.3729 8.54876 26.0286 8.70403 25.7761 8.96692L16.9768 19.1526L13.7373 15.9695Z" fill="#009F1D" />
                <path d="M29.7115 15.5614C29.3363 15.5614 28.9765 15.7104 28.7112 15.9757C28.4459 16.241 28.2968 16.6009 28.2968 16.9761C28.2968 19.9776 27.1045 22.8562 24.9821 24.9786C22.8596 27.1011 19.981 28.2934 16.9795 28.2934C14.7444 28.2924 12.5597 27.6296 10.7008 26.3886C8.84195 25.1476 7.39214 23.384 6.53422 21.3202C5.67631 19.2563 5.44869 16.9847 5.88009 14.7916C6.31149 12.5986 7.38257 10.5824 8.95829 8.99731C10.0061 7.93544 11.2553 7.09322 12.6326 6.51996C14.0098 5.94669 15.4876 5.65389 16.9795 5.65869C17.8841 5.66446 18.7854 5.76882 19.6673 5.96991C19.8519 6.027 20.0462 6.04568 20.2383 6.0248C20.4303 6.00392 20.6161 5.94392 20.7841 5.84851C20.9521 5.75309 21.0987 5.62427 21.215 5.47C21.3313 5.31573 21.4148 5.13928 21.4603 4.95151C21.5058 4.76375 21.5123 4.56866 21.4795 4.37827C21.4467 4.18788 21.3753 4.00622 21.2696 3.8445C21.1639 3.68278 21.0262 3.54442 20.865 3.43795C20.7038 3.33149 20.5225 3.25917 20.3322 3.22545C19.2333 2.96643 18.1085 2.83353 16.9795 2.82935C14.1846 2.84387 11.4566 3.68596 9.13979 5.24936C6.82299 6.81275 5.02122 9.02739 3.96184 11.6138C2.90246 14.2002 2.63296 17.0424 3.18733 19.7819C3.74171 22.5213 5.09512 25.0351 7.07678 27.0061C9.70338 29.6339 13.2641 31.1141 16.9795 31.1228C20.7314 31.1228 24.3297 29.6323 26.9827 26.9793C29.6357 24.3263 31.1262 20.728 31.1262 16.9761C31.1262 16.6009 30.9771 16.241 30.7118 15.9757C30.4465 15.7104 30.0867 15.5614 29.7115 15.5614Z" fill="#009F1D" />
              </svg>
              Celery Juicer
            </li>
          </ul>
        </div>

        <div className="find-perfet-content">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#2c2350] leading-tight mb-6"> Find Your Perfect Place </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Search a city, neighborhood, or ZIP code to discover your new place.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-600 transition">
              Learn More About Us
            </button>
            <div className="flex perfect-img-box">
              <img
                src="/images/perfect-place.png"
                alt="Community discussion"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/30 py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}

          <h2 className="text-4xl font-bold text-[#2c2350] leading-tight mb-6"> Latest Recipes </h2>
          <p className="text-gray-600 leading-relaxed mb-8">  Discover nourishing, healing recipes created by people just like you. From detox-friendly soups to low histamine smoothies, explore what our wellness community is cooking.            </p>


          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/5] shadow-sm transition-all duration-300 hover:shadow-xl border-2 px-4 py-8 border-white"
              >
                {/* Recipe Image */}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2 tracking-wide leading-tight">
                      {recipe.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-white mx-auto mb-2"></div>
                    <p className="text-xs font-medium uppercase tracking-tighter">
                      {recipe.tags}
                    </p>
                  </div>
                </div>

                {/* Simple Border Focus (Matches your image's selected blue border) */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/50 rounded-2xl pointer-events-none transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="find-friend">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-10">
            
            <div className="relative">
              
              <img src="/images/find-border.png" alt="" className="absolute left-[-10%] top-[-18%]"/>
              <img src="/images/message.png" alt="" className="w-20"/>
              <h2 className="text-4xl font-bold text-[#2c2350] leading-tight mb-6 mt-6">
                Find a friend or maybe more
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                Looking to connect with someone who truly understands your healing journey? Whether it’s friendship or something more, our community helps you find meaningful connections with like-minded individuals living a Medical Medium lifestyle.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-600 transition">  Join Free </button>
                <button className="text-primary border-2 border-secondary border-indigo-400  px-6 py-3 rounded-full font-medium  transition">  Contact Us </button>
              </div>

            </div>
            <div className="flex justify-end">
              <img src="/images/find-frineds.png" alt="" className="w-[95%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="counting-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-3">
            <div>
              <h1 className="text-[56px] font-semibold">10K</h1>
              <p className="text-[25px] font-normal text-primary">Bookings</p>
            </div>
          </div>
        </div>
      </section>

    </section>

  );
}