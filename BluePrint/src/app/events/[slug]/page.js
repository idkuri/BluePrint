import Homepage from "@/homepage/Homepage";
import axios from 'axios';

// Helper function to generate URL-friendly slugs
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const PRIVATE_API_URL = process.env.PRIVATE_API_URL || 'http://backend:5050'

export default async function EventPage({ params }) {
  // Await params in Next.js 15
  const { slug } = await params;
  
  console.log('===== SIMPLE DEBUG =====');
  console.log('Slug:', slug);
  console.log('Slug type:', typeof slug);
  console.log('Slug length:', slug?.length);
  
  try {
    const response = await axios.get(`${PRIVATE_API_URL}/events`);
    const events = response.data;
    
    console.log('Events fetched:', events.length);
    
    // Test with the first event
    if (events.length > 0) {
      const testTitle = events[0].title;
      const testSlug = generateSlug(testTitle);
      
      console.log('First event title:', testTitle);
      console.log('Generated test slug:', testSlug);
      console.log('URL slug matches:', testSlug === slug);
      console.log('Comparison:', {
        urlSlug: `"${slug}"`,
        generatedSlug: `"${testSlug}"`,
        equal: testSlug === slug
      });
    }
    
    // Find the event
    const event = events.find(e => {
      const eventSlug = generateSlug(e.title);
      console.log(`Checking: "${eventSlug}" === "${slug}" = ${eventSlug === slug}`);
      return eventSlug === slug;
    });
    
    if (!event) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-black">Event Not Found</h1>
            <p className="text-gray-600 mb-4">Looking for slug: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code></p>
            
            <div className="mt-6 text-left bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-3 text-black">Available slugs:</p>
              {events.map((e, idx) => {
                const eventSlug = generateSlug(e.title);
                return (
                  <div key={idx} className="mb-3 p-3 bg-white rounded border">
                    <div className="text-sm font-mono text-blue-600">{eventSlug}</div>
                    <div className="text-xs text-gray-500 mt-1">{e.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="overflow-x-hidden">
        <Homepage data={event} />
      </div>
    );
  } catch (error) {
    console.error('Error in EventPage:', error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-600">Error Loading Event</h1>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }
}