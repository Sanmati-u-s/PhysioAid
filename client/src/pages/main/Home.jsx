import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useScrollToTop from '../../hooks/useScrollToTop'
import { Button } from '@/components/ui/button'
import { 
  Heart,
  Brain, 
  Eye, 
  Smile, 
  Activity, 
  Users, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle2,
  Stethoscope
} from 'lucide-react'

const Home = () => {
  useScrollToTop()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(state => state.auth)

  const specialties = [
    {
      icon: Activity,
      title: 'Pain Management',
      description: 'Expert guidance for chronic and acute pain relief',
      color: 'bg-teal-500',
      lightColor: 'bg-teal-50'
    },
    {
      icon: Heart,
      title: 'Sports Injury',
      description: 'Recovery programs for athletic injuries',
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50'
    },
    {
      icon: Users,
      title: 'Post-Surgery Rehab',
      description: 'Structured rehabilitation after surgical procedures',
      color: 'bg-green-500',
      lightColor: 'bg-green-50'
    },
    {
      icon: Brain,
      title: 'Neurological Therapy',
      description: 'Specialized care for neurological conditions',
      color: 'bg-cyan-500',
      lightColor: 'bg-cyan-50'
    },
    {
      icon: Users,
      title: 'Elderly Care',
      description: 'Mobility and strength programs for seniors',
      color: 'bg-lime-500',
      lightColor: 'bg-lime-50'
    },
    {
      icon: Stethoscope,
      title: 'Preventive Care',
      description: 'Exercises to prevent injuries and maintain wellness',
      color: 'bg-teal-600',
      lightColor: 'bg-teal-50'
    }
  ]

  const features = [
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Get recommendations tailored to your specific symptoms and pain areas'
    },
    {
      icon: Clock,
      title: 'Quick Assessment',
      description: 'Receive instant guidance on home remedies and exercises to try'
    },
    {
      icon: Shield,
      title: 'Expert Referrals',
      description: 'Connect with trusted specialists when home care isn\'t enough'
    }
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Select Pain Area',
      description: 'Tell us where you\'re experiencing discomfort or pain'
    },
    {
      step: '02',
      title: 'Get Recommendations',
      description: 'Receive personalized home remedies and preventive care tips'
    },
    {
      step: '03',
      title: 'Track Progress',
      description: 'Monitor your recovery in your personal dashboard'
    },
    {
      step: '04',
      title: 'Specialist Support',
      description: 'Get referred to the right specialist if needed'
    }
  ]

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative bg-linear-to-br from-teal-500 via-emerald-500 to-green-600 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]' />
        <div className='absolute inset-0 bg-linear-to-t from-green-600/30 to-transparent' />
        
        <div className='container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20'>
              <img src='/images/logo.webp' alt='Physio Aid Logo' className='w-5 h-5 object-contain rounded bg-white' style={{ background: 'transparent' }} />
              <span className='text-sm font-medium'>Your Healthcare Companion</span>
            </div>
            
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              Expert Physiotherapy Care,
              <br />
              <span className='text-teal-100'>Tailored for You</span>
            </h1>
            
            <p className='text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto'>
              Your personalized physiotherapy companion. Get expert guidance, targeted exercises, 
              and effective remedies for pain relief and recovery.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button 
                size='lg' 
                className='bg-white cursor-pointer text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg font-semibold shadow-xl'
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/auth/register')}
              >
                {isAuthenticated ? 'Go to Dashboard' : 'Get Started Free'}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
              <Button 
                size='lg' 
                variant='outline' 
                className='bg-transparent cursor-pointer border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold'
                onClick={() => navigate('/main/exercises')}
              >
                View Exercises
              </Button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto'>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>50+</div>
                <div className='text-sm text-teal-100'>Exercise Programs</div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>24/7</div>
                <div className='text-sm text-teal-100'>Expert Guidance</div>
              </div>
              <div>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2'>100%</div>
                <div className='text-sm text-teal-100'>Personalized</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg viewBox='0 0 1440 120' className='w-full h-12 md:h-20 fill-gray-50'>
            <path d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Physio Aid?
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              We make healthcare accessible, personalized, and effective
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {features.map((feature, index) => (
              <div 
                key={index}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 group'
              >
                <div className='w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300'>
                  <feature.icon className='w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Physiotherapy Areas We Specialize In
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Comprehensive physiotherapy care tailored to your needs
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className={`${specialty.lightColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-200 group`}
              >
                <div className={`w-12 h-12 ${specialty.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {specialty.title === 'Sports Injury' ? (
                    <img src='/images/logo.webp' alt='Physio Aid Logo' className='w-7 h-7 object-contain rounded bg-white' style={{ background: 'transparent' }} />
                  ) : (
                    <specialty.icon className='w-6 h-6 text-white' />
                  )}
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{specialty.title}</h3>
                <p className='text-sm text-gray-600'>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-20 bg-linear-to-br from-gray-50 to-teal-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              How Physio Aid Works
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Simple, effective, and designed for your health journey
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {howItWorks.map((item, index) => (
              <div key={index} className='relative'>
                <div className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full'>
                  <div className='text-5xl font-bold text-teal-100 mb-4'>{item.step}</div>
                  <h3 className='text-lg font-bold text-gray-900 mb-3'>{item.title}</h3>
                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                    <ArrowRight className='w-6 h-6 text-teal-300' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-linear-to-r from-teal-500 to-emerald-600 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Ready to Take Control of Your Health?
            </h2>
            <p className='text-lg text-teal-50 mb-8'>
              Join Physio Aid today and get personalized physiotherapy programs 
              designed specifically for your recovery and wellness goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button 
                size='lg' 
                className='bg-white cursor-pointer text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg font-semibold shadow-xl'
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/auth/register')}
              >
                {isAuthenticated ? 'Access Dashboard' : 'Sign Up Now'}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </div>
            {/* Trust badges */}
            <div className='flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-teal-100'>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-5 h-5' />
                <span>Free to use</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-5 h-5' />
                <span>Secure & Private</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-5 h-5' />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;