import { useNavigate } from 'react-router-dom';
import './error.css';

// var parallax = function(e) {
//   var windowWidth = $(window).width();
//   if (windowWidth < 768) return;
//   var halfFieldWidth = $(".parallax").width() / 2,
//     halfFieldHeight = $(".parallax").height() / 2,
//     fieldPos = $(".parallax").offset(),
//     x = e.pageX,
//     y = e.pageY - fieldPos.top,
//     newX = (x - halfFieldWidth) / 30,
//     newY = (y - halfFieldHeight) / 30;
//   $('.parallax [className*="wave"]').each(function(index) {
//     $(this).css({
//       transition: "",
//       transform:
//         "translate3d(" + index * newX + "px," + index * newY + "px,0px)"
//     });
//   });
// }, stopParallax = function() {
//   $('.parallax [className*="wave"]').css({
//     transform: "translate(0px,0px)",
//     transition: "all .7s"
//   });
//   $timeout(function() {
//     $('.parallax [className*="wave"]').css("transition", "");
//   }, 700);
// };
// $(document).ready(function() {
// $(".not-found").on("mousemove", parallax);
// $(".not-found").on("mouseleave", stopParallax);
// });

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found parallax">
      <div className="sky-bg"></div>
      <div className="wave-7"></div>
      <div className="wave-6"></div>
      <a className="wave-island" onClick={() => navigate('/')}>
        <img
          src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
          alt="Island"
        />
      </a>
      <div className="wave-5"></div>
      <div className="wave-lost wrp">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <div className="wave-4"></div>
      <div className="wave-boat">
        <img
          className="boat"
          src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg"
          alt="Boat"
        />
      </div>
      <div className="wave-3"></div>
      <div className="wave-2"></div>
      <div className="wave-1"></div>
      <div className="wave-message">
        <p>Your're lost</p>
        <p>Click on the island to return</p>
      </div>
    </div>
  );
};

// const Error = () => {

//   return (
//     <div className="main">
//   <div>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 355">
//   <g id="ocean">
//     <path id="sky" className="st0" d="M0 0h1000v203.1H0z"/>
//     <linearGradient id="water_1_" gradientUnits="userSpaceOnUse" x1="500" y1="354" x2="500" y2="200.667">
//       <stop offset="0" stop-color="#fff"/>
//       <stop offset="1" stop-color="#b3dcdf"/>
//     </linearGradient>
//     <path id="water" fill="url(#water_1_)" d="M0 200.7h1000V354H0z"/>
//     <path id="land" className="st0" d="M0 273.4h1000V354H0z"/>
//     <g id="bumps">
//       <path className="st0" d="M0 275.2s83.8-28 180-28 197 28 197 28H0z"/>
//     <path className="st0" d="M377 275.2s54.7-28 117.5-28 128.6 28 128.6 28H377z"/>
//     <path className="st0" d="M623.2 275.2s83.7-28 179.9-28 196.9 28 196.9 28H623.2z"/>
//       <path className="st0" d="M-998 275.2s83.8-28 180-28 197 28 197 28h-377z"/>
//       <path className="st0" d="M-621 275.2s54.7-28 117.5-28 128.6 28 128.6 28H-621z"/>
//       <path className="st0" d="M-374.8 275.2s83.7-28 179.9-28S2 275.2 2 275.2h-376.8z"/>
//     </g>
//   </g>
//   <g id="tracks">
//     <path className="st2" d="M9.8 282.4h-3L0 307.6h3z"/>
//     <path className="st2" d="M19.8 282.4h-3L10 307.6h3z"/>
//     <path className="st2" d="M29.8 282.4h-3L20 307.6h3z"/>
//     <path className="st2" d="M39.8 282.4h-3L30 307.6h3z"/>
//     <path className="st2" d="M49.8 282.4h-3L40 307.6h3z"/>
//     <path className="st2" d="M59.8 282.4h-3L50 307.6h3z"/>
//     <path className="st2" d="M69.8 282.4h-3L60 307.6h3z"/>
//     <path className="st2" d="M79.8 282.4h-3L70 307.6h3z"/>
//     <path className="st2" d="M89.8 282.4h-3L80 307.6h3z"/>
//     <path className="st2" d="M99.8 282.4h-3L90 307.6h3z"/>
//     <path className="st2" d="M109.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M119.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M129.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M139.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M149.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M159.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M169.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M179.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M189.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M199.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M209.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M219.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M229.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M239.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M249.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M259.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M269.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M279.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M289.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M299.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M309.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M319.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M329.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M339.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M349.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M359.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M369.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M379.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M389.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M399.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M409.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M419.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M429.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M439.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M449.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M459.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M469.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M479.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M489.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M499.8 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M1000 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M990 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M980 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M970 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M960 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M950 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M940 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M930 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M920 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M910 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M900 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M890 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M880 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M870 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M860 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M850 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M840 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M830 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M820 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M810 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M800 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M790 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M780 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M770 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M760 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M750 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M740 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M730 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M720 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M710 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M700 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M690 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M680 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M670 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M660 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M650 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M640 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M630 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M620 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M610 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M600 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M590 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M580 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M570 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M560 282.4h-3l-6.8 25.2h3z"/>
//     <g>
//       <path className="st2" d="M-490.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-480.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-470.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-460.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-450.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-440.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-430.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-420.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-410.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-400.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-390.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-380.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-370.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-360.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-350.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-340.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-330.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-320.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-310.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-300.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-290.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-280.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-270.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-260.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-250.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-240.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-230.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-220.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-210.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-200.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-190.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-180.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-170.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-160.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-150.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-140.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-130.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-120.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-110.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-100.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-90.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-80.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-70.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-60.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-50.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-40.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-30.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-20.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-10.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M-.2 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M500 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M490 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M480 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M470 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M460 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M450 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M440 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M430 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M420 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M410 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M400 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M390 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M380 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M370 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M360 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M350 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M340 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M330 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M320 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M310 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M300 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M290 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M280 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M270 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M260 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M250 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M240 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M230 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M220 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M210 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M200 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M190 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M180 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M170 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M160 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M150 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M140 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M130 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M120 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M110 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M100 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M90 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M80 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M70 282.4h-3l-6.8 25.2h3z"/>
//       <path className="st2" d="M60 282.4h-3l-6.8 25.2h3z"/>
//     </g>
//     <path className="st2" d="M550 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M540 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M530 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M520 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M510 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M550 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M540 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M530 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M520 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st2" d="M510 282.4h-3l-6.8 25.2h3z"/>
//     <path className="st3" d="M-499.5 300.2H1000v5.1H-499.5z"/>
//     <path className="st3" d="M-499.5 283.8H1000v2.8H-499.5z"/>
//   </g>
//   <g id="cloudsAll">
//     <path id="cloud1" className="st4" d="M19.5 69.7s-21.3.5-25-12.2c0 0-4.3-21.3 16-21.8 0 0-2.1-12.2 12.2-14.9 0 0 15-3.2 21.3 6.9 0 0 3.6-20.7 17.8-22.3 0 0 24-3 26.6 13.1 0 0 .1 9.5-2.8 13.5 0 0 9.5-15 26.5-4.8 0 0 12.1 7.9 7 20.2 0 0 16 4.8 10.1 18.1 0 0-10.2 8.5-17.1-1.1 0 0-5.5 16-32.5 16 0 0-19.1 2.1-27-13.3 0 0 .5 10.1-13.3 10.6-.1 0-20.3 3.2-19.8-8z"/>
//     <path id="cloud3" className="st4" d="M836 132s-18.3 2.1-22.2-4.9c0 0-4.9-11.8 12.5-13.8 0 0-2.5-6.8 9.7-9.6 0 0 12.7-3.1 18.7 2.1 0 0 2-12.2 14-14.3 0 0 16.6-3.3 23.7 2.1 0 0 4.8 3.9 2.4 6.5 0 0 3.1-4.8 18.4-.4 0 0 10.9 3.5 7.2 11 0 0 13.8-1.5 9.7 9.5 0 0-4.1 10.8-15.5 4.8 0 0-3.1 5.6-26.4 7.9 0 0-16.3 2.8-24-5.3 0 0 1 5.7-10.8 7.2-.1.1-17.2 3.6-17.4-2.8z"/>
//     <path id="cloud2" className="st4" d="M19.3 159.5s-15.9.6-18.8-5.1c0 0-3.4-9.5 11.7-10.1 0 0-1.7-5.5 9-6.9 0 0 11.2-1.7 16 2.8 0 0 2.5-9.4 13.1-10.3 0 0 17.9-1.8 20 5.4 0 0 .2 4.3-2 6.1 0 0 6.9-6.9 19.8-2.6 0 0 9.1 3.4 5.5 9 0 0 6.5 0 4.5 6.7 0 0-2.6 5.6-9.6 1 0 0-4 7.3-24.2 7.7 0 0-14.2 1.3-20.4-5.5 0 0 .5 4.5-9.8 5 0 .1-15 1.8-14.8-3.2z"/>
//     <path id="cloud4" className="st4" d="M370.3 109.5s15.9.6 18.8-5.1c0 0 3.4-9.5-11.7-10.1 0 0 1.7-5.5-9-6.9 0 0-11.2-1.7-16 2.8 0 0-2.5-9.4-13.1-10.3 0 0-17.9-1.8-20 5.4 0 0-.2 4.3 2 6.1 0 0-6.9-6.9-19.8-2.6 0 0-9.1 3.4-5.5 9 0 0-12 1.9-7.7 8 0 0 7.5 4 12.8-.2 0 0 4 7.3 24.2 7.7 0 0 14.2 1.3 20.4-5.5 0 0-.5 4.5 9.8 5 0 0 15.1 1.7 14.8-3.3z"/>
//     <path id="cloud5" className="st4" d="M511.7 12.4s-21.3-.3-25 7c0 0-4.3 12.2 16 12.5 0 0-2.1 7 12.2 8.6 0 0 15 1.8 21.3-4 0 0 3.6 11.9 17.8 12.8 0 0 19.5 1.6 27-4.4 0 0 5-4.4 2.1-6.7 0 0 4.1 4.4 21.2-1.5 0 0 12.1-4.6 7-11.6 0 0 16-2.8 10.1-10.4 0 0-10.2-4.9-17.1.6 0 0-5.5-9.2-32.5-9.2 0 0-19.1-1.2-27 7.6 0 0 .5-5.8-13.3-6.1-.1.2-20.3-1.6-19.8 4.8z"/>
//   </g>
//   <g id="train">
//     <path fill="#b3dcdf" d="M344.5 248.5h507.2v37.8H344.5z"/>
//     <g id="wheels">
//       <circle className="st6" cx="384.1" cy="285.6" r="15.1"/>
//       <path className="st2" d="M384.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
//       <circle className="st6" cx="416.1" cy="285.6" r="15.1"/>
//       <path className="st2" d="M416.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
//       <circle className="st6" cx="469.1" cy="285.6" r="15.1"/>
//       <path className="st2" d="M469.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
//       <circle className="st6" cx="734.1" cy="285.6" r="15.1"/>
//       <path className="st2" d="M734.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
//       <circle className="st6" cx="766.1" cy="285.6" r="15.1"/>
//       <path className="st2" d="M766.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
//       <circle className="st6" cx="821.1" cy="285.6" r="15.1"/>
//       <path className="st2" d="M821.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
//     </g>
//     <path id="bracefront" className="st7" d="M383.2 285.6h88.1"/>
//     <path id="braceback" className="st7" d="M733.2 285.6h88.1"/>
//     <g id="car-layers">
//       <path id="car" className="st8" d="M321.8 300.7v-32.4s1.2.7-1.5-2.4v-29.1s3.1-11.6 10.7-21.1c0 0 7.6-12 15.5-17.5h1.3s10.2-4.9 30.9-28h.6s-.9-1.4 0-2.7c0 0 10.1-10.5 21-12.3 0 0 9.4-1.8 20.2-1.8h47.7V151H492v-1.1h10.1v1.1h19v2.2s8.2.9 19.2-4.2c0 0 1.4-1.1 28.8-1.1h291.5v6.8h7.5v2.2s12.2-.6 12.2 9.8V177l-10-.1v57.9s14.9-.5 14.9 10.2c0 0 1 9-14.9 8.9v3.8H719.5s-2.4.1-4.3 3l-15 29s-2.9 5.1-10.8 5.1H504.3s-2.9.1-6.1-5l-13.1-25s-4.5-7.1-11.8-7.1H369v2.4s-3.2 1.3-7.1 8.7L351.4 289s-2.9 6.3-6.9 6.4h-17.8l-4.9 5.3z"/>
//       <path id="streamline-outine" className="st8" d="M320.3 236.6s1.4-6.8 4.4-11.3c0 0 .1-2.3 23.2-6.3l78-16.6s103.3-21.1 134.9-26.1c0 0 93.3-16 120.5-17.9 0 0 57.6-4.3 100-4.1h88.9v63.4s-10.3 5.4-17.1 5.3c0 0-305.6 4.9-366.3 8.1 0 0-100.3 4.8-119.1 6.8 0-.1-46.6 1.2-47.4-1.3z"/>
//       <g id="window-grate">
//         <path className="st9" d="M739.5 182.6H854"/>
//         <path className="st9" d="M739.5 177.6H854"/>
//         <path className="st9" d="M739.5 172.6H854"/>
//         <path className="st9" d="M739.5 167.6H854"/>
//         <path className="st9" d="M739.5 161.4H854v26.1H739.5z"/>
//       </g>
//       <path className="st9" d="M320.3 257.8h549.9"/>
//       <g id="Text">
//         <text transform="translate(377.037 230.025)" className="st8 st10" font-size="21">
//           404
//         </text>
//         <text transform="translate(659.5 213.994)" className="st8 st10" font-size="24.025">
//         Page not found.
//         </text>
//       </g>
//       <g id="ladders">
//         <g id="ladder-f">
//           <path id="front-ladder" className="st8" d="M433.8 258.4h17.8v34.8h-17.8z"/>
//           <path id="fb-rung" className="st9" d="M433.8 281.1h17.7"/>
//           <path id="ft-rung" className="st9" d="M433.8 268.6h17.7"/>
//         </g>
//         <g id="ladder-b">
//           <path id="ladder-back" className="st8" d="M851.8 257.8h17.8v34.8h-17.8z"/>
//           <path id="bt-rung" className="st9" d="M851.8 268.6h17.7"/>
//           <path id="bb-rung" className="st9" d="M851.8 281.1h17.7"/>
//         </g>
//       </g>
//       <path id="window-front" className="st8" d="M350.5 196.4s-.4 3.9 15.2 4.3l32.3-30.3s-18.2 1.1-19-.8l-28.5 26.8z"/>
//     </g>
//   </g>
// </svg>
//   </div>
// </div>
//   )
// }

// const Error = () => {

//   return (
//     <svg id="404-Dave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 250">
//     <defs>
//         <clipPath id="center-circle-clip"><circle cx="275.667" cy="122.667" r="84.33"/>
//         </clipPath>
//     </defs>
//    <g id="bg">
//       <path id="Bg-green" fill="#007aff" d="M275.7 207c-46.5 0-84.3-37.8-84.3-84.3s37.8-84.3 84.3-84.3S360 76.2 360 122.7 322.2 207 275.7 207z"/>
//       <g id="Clouds" fill="#FFF" clip-path="url(#center-circle-clip)">
//       <path id="cloud-right" d="M348 137c-8.5 0-15.4 6.9-15.4 15.3v.4c-4.4 1.1-7.7 5.2-7.7 10 0 5.6 4.6 10.3 10.2 10.3h5.8c7.4-9.7 12.7-21.2 15.3-33.6-2.3-1.5-5.1-2.4-8.2-2.4z"/>
//       <path id="cloud-left" d="M219.3 131.1c0-4.5-3.8-8.2-8.4-7.8-1.3-3.7-4.8-6.3-8.8-6.3-3.9 0-7.3 2.4-8.7 5.9 0 5.5.6 10.9 1.6 16.2h16.5c4.2-.1 7.8-3.7 7.8-8z"/>
//     </g>
//     <path id="Outline-blue" fill="#263D52" d="M275.7 40.3c45.5 0 82.3 36.9 82.3 82.3S321.1 205 275.7 205s-82.3-36.9-82.3-82.3 36.8-82.4 82.3-82.4m0-4c-47.6 0-86.3 38.7-86.3 86.3s38.7 86.3 86.3 86.3c47.6 0 86.3-38.7 86.3-86.3s-38.7-86.3-86.3-86.3z"/>

//     <path fill="#2D495E" d="M275.7 45.3c44.6 0 80.9 35.5 82.3 79.8 0-.8.1-1.7.1-2.5 0-45.5-36.9-82.3-82.3-82.3s-82.3 36.9-82.3 82.3c0 .8 0 1.7.1 2.5 1.1-44.2 37.4-79.8 82.1-79.8z" id="Bg-Innershadow" opacity=".1"/>
//   </g>
//   <g id="Dave-clipper" clip-path="url(#center-circle-clip)">
//     <g id="Dave">
//     <path id="Body" fill="#263D52" d="M251.5 187c-7 0-13.3 2.9-17.8 7.5 12.3 7.3 26.7 11.5 42 11.5 15.4 0 29.9-4.3 42.2-11.7-4.6-4.5-10.8-7.3-17.7-7.3h-48.7z"/>
//     <rect id="Body-extender" x="228" y="187" width="95.673" height="50" rx="22.51" ry="22.51" fill="#263D52" />
//     <g id="Neck">
//       <path id="Neck-fill" fill="#FFF" d="M275.5 157c-8 0-14.5 6.5-14.5 14.5v15c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5v-15c0-8-6.5-14.5-14.5-14.5z"/>
//       <path id="Neck-outline" fill="#263D52" d="M275.5 202c-8.5 0-15.5-7-15.5-15.5v-15c0-8.5 7-15.5 15.5-15.5s15.5 7 15.5 15.5v15c0 8.5-7 15.5-15.5 15.5zm0-44c-7.4 0-13.5 6.1-13.5 13.5v15c0 7.4 6.1 13.5 13.5 13.5s13.5-6.1 13.5-13.5v-15c0-7.4-6.1-13.5-13.5-13.5z"/>
//       <path fill="#E4ECF3" d="M262.1 187.7c4.5 1.3 9.3 1.9 14.4 1.7 4.4-.1 8.6-.8 12.5-2v-1.3l-.1-3.7c-4 1.2-8.2 1.9-12.6 2.1-5.1.2-9.9-.5-14.4-1.7l.1 4.2c0 .2.1.5.1.7z" id="Neck-Innershadow"/>
//     </g>
//     <g id="Ears">
//       <g id="Ear-right">
//         <path id="Ear-fill-right" fill="#B6CFD8" d="M314.8 130.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"/>
//         <path id="Ear-outline-right" fill="#263D52" d="M314.8 111.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z"/>
//       </g>
//       <g id="Ear-left">
//         <path id="Ear-fill-left" fill="#E1EDF4" d="M234.8 130.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"/>
//         <path id="Ear-outline-left" fill="#263D52" d="M234.8 111.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z"/>
//       </g>
//     </g>
//     <g id="Face">
//       <path id="Face-fill" fill="#F2F8FC" d="M275 172c-22.6 0-41-18.3-41-40.9v-28.7c0-22.6 18.4-40.9 41-40.9s41 18.3 41 40.9v28.7c0 22.6-18.4 40.9-41 40.9z"/>
//       <path id="Face-Outline" fill="#263D52" d="M275 62.5c22 0 40 17.9 40 39.9v28.7c0 22-18 39.9-40 39.9s-40-17.9-40-39.9v-28.7c0-22 18-39.9 40-39.9m0-2c-23.2 0-42 18.8-42 41.9v28.7c0 23.1 18.8 41.9 42 41.9s42-18.8 42-41.9v-28.7c0-23.1-18.8-41.9-42-41.9z"/>
//       <path id="Face-innershadow" fill="#E1EDF4" d="M274.6 62.5c-2.2 0-4.2.2-6.3.5 19 3.1 33.7 19.5 33.7 39.4v28.7c0 19.8-15 36.3-33.9 39.4 2.1.3 4.5.5 6.7.5 22 0 40.2-17.9 40.2-39.9v-28.7c0-22-18.4-39.9-40.4-39.9z"/>
//       <g id="Blush" fill="#E1EDF4">
//         <circle id="blush-left" cx="249.5" cy="135" r="10.3"/>
//         <circle id="blush-right" cx="300.5" cy="134" r="10.3"/>
//       </g>
//     </g>
//     <g id="Eyes" fill="#263D52">
//       <circle id="eyes-left" style={{"transformOrigin": "25.64rem 11.43rem"}} className="blinking-eyes" cx="256.4" cy="114.3" r="5.9"/>
//       <circle id="eyes-right" style={{"transformOrigin": "29.43rem 11.43rem"}} className="blinking-eyes" cx="294.3" cy="114.3" r="5.9"/>
//     </g>
//     <path id="unibrow" fill="#263D52" d="M304 106h-57c-.6 0-1-.4-1-1s.4-1 1-1h57c.6 0 1 .4 1 1s-.4 1-1 1z"/>
//     <g id="facial-hair">
//       <path fill="#2D495E" d="M317.2 109.7l-1.2.1-1.3 19.6c0 6.6-3.1 12.7-10.2 12.7H254 246.4c-7.1 0-11.2-6.2-11.2-12.8l-.2-19.8h-2c-.6 7-2 27.4-2 32.9 0 23.3 19.4 42.1 44.5 42.1s44.5-18.7 44.5-42c0-5.5-2.2-25.8-2.8-32.8z" id="beard-lower"/>
//       <path fill="#263D52" d="M317.2 109.7H316l-1.3 19.6c0 6.6-3.1 12.7-10.2 12.7H301v.4c0 20.3-14.6 37.1-35 41.1 3 .6 6.2.9 9.5.9 25.1 0 44.5-18.7 44.5-42 0-5.4-2.2-25.7-2.8-32.7z" id="beard-innershadow"/>
//       <path id="moustache" fill="#2D495E" d="M297 142c-3-7-9.1-11.3-16-13-.9 2.1-3 3.4-5.5 3.4s-4.5-1.3-5.3-3.4c-7.1 1.6-13.1 6-16.1 13v1h43v-1z"/>
//     </g>
//     </g>
//   </g>
//   <g fill="#263D52" id="Numbers">
//     <path d="M165.3 173.2h-20.8V209h-35.7v-35.8H35.2v-25.4l75.7-111.5h33.7v108.5h20.8v28.4zm-56.4-28.3v-29.3c0-4.9.2-12 .6-21.3.4-9.3.7-14.7.9-16.2h-.9c-2.9 6.5-6.4 12.8-10.5 18.9l-31.7 47.8h41.6zM512.3 173.2h-20.8V209h-35.7v-35.8h-73.7v-25.4l75.7-111.5h33.7v108.5h20.8v28.4zM456 145.1v-29.3c0-4.9.2-12 .6-21.3.4-9.3.7-14.7.9-16.2h-.9c-2.9 6.5-6.4 12.8-10.5 18.9l-31.7 47.9H456z"/>
//   </g>
// </svg>
//   )
// }

export default Error;
