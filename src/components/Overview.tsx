import { MapPin, Code2 } from 'lucide-react'

interface OverviewProps {
  isVisible?: boolean;
}

const Overview = ({ isVisible }: OverviewProps) => {
  return (
    <>
      <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 md:text-lg leading-relaxed">
                  I'm a passionate full-stack engineer with 5+ years of experience crafting digital solutions 
                  that bridge the gap between complex technical requirements and intuitive user experiences.
                </p>
                <p className="text-gray-300 md:text-lg leading-relaxed">
                  My journey began with curiosity about how websites work, and it evolved into a deep love 
                  for building scalable, performant applications that solve real-world problems. I thrive in 
                  collaborative environments where innovation meets practicality.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: MapPin, text: 'Gaithersburg, MD' },
                  { icon: Code2, text: '10+ projects completed' },
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Icon className="w-4 h-4 text-amber-300" />
                    <span className="text-sm text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Focus Areas</span>
                    <span className="text-white">Full-Stack, DevOps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Preferred Stack</span>
                    <span className="text-white">Nextjs, TypeScript, Node.js, AWS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Currently Learning</span>
                    <span className="text-white">AI/ML, Web3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-green-400">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Overview