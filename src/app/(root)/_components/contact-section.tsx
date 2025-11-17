// ========================================
// CONTACT SECTION COMPONENT - MODERN TECH PALETTE
// ========================================

import { Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCFCFA] via-[#F8F5EE] to-[#FCFCFA]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4500]/2 to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-[#FF6347] to-[#FF4500] rounded-full blur-[90px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gradient-to-br from-[#FF7F50] to-[#FF4500] rounded-full blur-[80px] animate-pulse opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center px-6 py-3 mb-8 text-sm font-semibold bg-gradient-to-r from-[#FF4500]/10 to-[#FF6347]/10 backdrop-blur-sm rounded-full border border-[#FF4500]/20 shadow-lg">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full mr-3 animate-pulse"></span>
            <span className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text text-transparent font-bold">
              Contact Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text select-none animate-text-glow">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 select-none">Ready to be part of the OPEXN ecosystem?</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-center">
            <Card className="bg-white/90 backdrop-blur-md border border-gray-200/30 hover:shadow-2xl hover:shadow-[#FF4500]/20 hover:border-[#FF4500]/40 transition-all duration-500 hover:-translate-y-3 hover:scale-105 group rounded-3xl">
              <CardContent className="pt-8 pb-8 select-none">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FF4500] to-[#FF6347] w-fit mx-auto mb-6 group-hover:shadow-xl group-hover:shadow-[#FF4500]/30 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="font-bold mb-4 text-lg md:text-xl text-gray-900">Phone</h3>
                <p className="text-gray-700 text-base md:text-lg mb-2 hover:text-[#FF4500] transition-colors cursor-pointer font-medium">
                  +91 84390 56300
                </p>
                <p className="text-gray-700 text-base md:text-lg hover:text-[#FF6347] transition-colors cursor-pointer font-medium">
                  +91 70785 83771
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-md border border-gray-200/30 hover:shadow-2xl hover:shadow-[#FF6347]/20 hover:border-[#FF6347]/40 transition-all duration-500 hover:-translate-y-3 hover:scale-105 group select-none rounded-3xl">
              <CardContent className="pt-8 pb-8">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FF6347] to-[#FF4500] w-fit mx-auto mb-6 group-hover:shadow-xl group-hover:shadow-[#FF6347]/30 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="font-bold mb-4 text-lg md:text-xl text-gray-900">Email</h3>
                <p className="text-gray-700 text-base md:text-lg hover:text-[#FF6347] transition-colors cursor-pointer font-medium">
                  info.opexn@gmail.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* <div className="mt-12 text-center">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200/30 hover:shadow-2xl hover:border-[#FF4500]/30 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text text-transparent mb-4">
                Visit Our Website
              </h3>
              <p className="text-gray-700 text-lg mb-6">Explore more about our platform and opportunities</p>
              <a
                href="https://www.opexn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#FF4500]/30 transition-all duration-300 hover:scale-110 hover:from-[#FF6347] hover:to-[#FF4500]"
              >
                www.opexn.com
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
