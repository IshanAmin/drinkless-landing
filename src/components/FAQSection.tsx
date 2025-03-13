
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Sobr?",
      answer: "Sobr is a mobile supportive app for iOS and Android designed to help individuals on their sobriety journey. It offers personalized tracking, positive affirmations, and engaging positive distractions to empower users and assist in maintaining a sober lifestyle.",
    },
    {
      question: "How does Sobr work?",
      answer: "Sobr allows users to set goals, track their progress, and receive personalized feedback, reach goals, achieve badges and top-spots in leaderboards. The app features motivational content and activities that help keep users engaged and focused on their sobriety goals.",
    },
    {
      question: "Is Sobr suitable for everyone?",
      answer: "Yes, Sobr is designed for anyone looking to reduce alcohol consumption or maintain sobriety, regardless of their experience level. Whether you are new to sobriety or seeking ongoing support, Sobr can provide valuable tools.",
    },
    {
      question: "Is the app free to use?",
      answer: "Sobr offers a free version with essential features and options for an upgraded subscription that includes additional tools and resources. Visit our pricing page for more details.",
    },
    {
      question: "Can I track my progress over time?",
      answer: "Absolutely! Sobr provides personalized tracking features that allow you to monitor your progress, celebrate milestones, and reflect on your journey to sobriety.",
    },
    {
      question: "What kind of positive affirmations does Sobr offer?",
      answer: "Sobr includes a variety of positive affirmations tailored to inspire and motivate users. These affirmations can be personalized to resonate with your individual journey and challenges.",
    },
    {
      question: "Is my personal information safe with Sobr?",
      answer: "Yes, we take your privacy seriously. Sobr employs robust security measures to protect your personal information and ensure that your data is kept confidential.",
    },
    {
      question: "How can I get support if I have questions while using the app?",
      answer: "If you have any questions or need assistance, you can reach out to our support team via the app or through our website's contact form. We are here to help you!",
    },
    {
      question: "Can I use Sobr offline?",
      answer: "Many features of Sobr are accessible offline, allowing you to track your progress and engage with content without an internet connection. However, some features may require connectivity for full functionality.",
    },
    {
      question: "Where can I download the Sobr app?",
      answer: "You can't download Sobr from the Apple App Store and Google Play Store yet! If you sign up for the early access-we'll send you an email as soon as it's available under private beta.",
    },
    {
      question: "Do you sell my personal information to third parties?",
      answer: "No, we do not sell, rent, or share your personal information with third parties under any circumstances. Your privacy is our top priority, and we are committed to protecting your data.",
    },
    {
      question: "How is my data protected in the Sobr app?",
      answer: "Sobr employs industry-standard security measures to protect your personal information, including encryption and secure servers. We are dedicated to ensuring that your data remains safe and confidential.",
    },
    {
      question: "Can I delete my account at any time?",
      answer: "Yes, you can delete your account at any time. Simply let us know, and we will process your request immediately, ensuring that all your personal data is permanently removed from our systems. The only thing we will keep is transactional data.",
    },
    {
      question: "What happens to my data if I delete my account?",
      answer: "Once you request account deletion, all of your personal information and data associated with your account will be permanently removed from our servers as per your instructions. We take your privacy seriously and ensure that your data is handled responsibly.",
    },
    {
      question: "Do you track my activity within the app?",
      answer: "We may track certain anonymous usage statistics to improve the app's functionality and user experience. However, this data does not include personally identifiable information and is used solely for app enhancement purposes.",
    },
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
