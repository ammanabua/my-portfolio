

interface JourneyProps {
  isVisible?: boolean;
}

const Journey = ({ isVisible }: JourneyProps) => {
  return (
    <>
      <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">From Curiosity to Career</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My path into software engineering wasn't traditional, but it was driven by genuine passion 
              and continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">The Spark ⚡</h4>
                <p className="text-gray-300">
                  It all started just after my first college degree, when I built my first website. The moment I saw my code 
                  come to life in the browser, I was hooked. That feeling of creating something from nothing became my driving force.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">The Growth 📈</h4>
                <p className="text-gray-300">
                  I spent countless nights learning new frameworks, contributing to open source, 
                  and building side projects. Each challenge taught me something new and pushed 
                  me to become a better developer.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-green-300 mb-3">The Impact 🚀</h4>
                <p className="text-gray-300">
                  Today, I focus on building applications that make a real difference. Whether it's 
                  improving user experience or solving complex technical challenges, I'm motivated 
                  by the positive impact technology can have.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10">
                <h4 className="text-lg font-semibold text-yellow-300 mb-3">The Future 🎯</h4>
                <p className="text-gray-300">
                  I'm excited about emerging technologies like AI and Web3, especially with the recent advancements in AI Agents. My goal is to stay 
                  at the forefront of innovation, continuously learning while mentoring the next generation of developers.
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Journey