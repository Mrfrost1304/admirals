import DemoTradingBanner from "./Component/DemotradingBanner"
import CommissionFreeSection from "./Component/Hero"
import CFDTradingHero from "./Component/Hero2"
import HowItWorks from "./Component/HowitWorks"
import TradingInstruments from "./Component/iconebar"
import MetaTraderShowcase from "./Component/Metatrader"
import AdmiralsHeader from "./Component/Navbar"
import TradingConditions from "./Component/TradingCondition"
import WhyChooseAdmirals from "./Component/Whchoose"
import image from './assets/image.png'
import AdmiralsFooter from "./Component/Footer1"
import GetInTouchSection from "./Component/GetinTouch"

function App() {


  return (
    <>
    <AdmiralsHeader></AdmiralsHeader>
    <CommissionFreeSection></CommissionFreeSection>
    <CFDTradingHero></CFDTradingHero>
    <TradingInstruments></TradingInstruments>
    <HowItWorks></HowItWorks>
    <MetaTraderShowcase></MetaTraderShowcase>
    <TradingConditions></TradingConditions>
    <WhyChooseAdmirals></WhyChooseAdmirals>
   <DemoTradingBanner></DemoTradingBanner>
   <GetInTouchSection></GetInTouchSection>
   <AdmiralsFooter></AdmiralsFooter>
    </>
  )
}

export default App
