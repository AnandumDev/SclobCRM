import React from 'react';

export default function TargetPerformanceChart() {
  const data = [
    { day: 'Mon', completed: 85, color: 'bg-orange-500', darkColor: '#ea580c', lightColor: '#fb923c' },
    { day: 'Tue', completed: 45, color: 'bg-pink-400', darkColor: '#ec4899', lightColor: '#f9a8d4' },
    { day: 'Wed', completed: 70, color: 'bg-yellow-500', darkColor: '#eab308', lightColor: '#fde047' },
    { day: 'Thu', completed: 55, color: 'bg-green-500', darkColor: '#22c55e', lightColor: '#86efac' },
    { day: 'Fri', completed: 90, color: 'bg-red-500', darkColor: '#ef4444', lightColor: '#fca5a5' },
    { day: 'Sat', completed: 30, color: 'bg-gray-400', darkColor: '#9ca3af', lightColor: '#d1d5db' }
  ];

  return (
    <div className="mx-4 mt-4">
      <div className="bg-red-50 rounded-3xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-8">
          Target Performance
        </h2>
        
        <div className="flex justify-around items-end gap-2 h-64">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Bar container */}
              <div className="w-9 h-48 relative" style={{ perspective: '200px' }}>
                {/* Background cylinder with 3D effect */}
                <div className="absolute inset-0 rounded-full" style={{
                  background: 'linear-gradient(to right, #6b7280 0%, #9ca3af 30%, #d1d5db 50%, #9ca3af 70%, #6b7280 100%)',
                  boxShadow: 'inset -3px 0 6px rgba(0,0,0,0.3), inset 3px 0 6px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.1)'
                }}>
                </div>
                
                {/* Filled portion with 3D effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 rounded-full transition-all duration-500"
                  style={{ 
                    height: `${item.completed}%`,
                    background: `linear-gradient(to right, ${item.darkColor} 0%, ${item.lightColor} 30%, ${item.lightColor} 50%, ${item.lightColor} 70%, ${item.darkColor} 100%)`,
                    boxShadow: `inset -3px 0 6px rgba(0,0,0,0.35), inset 3px 0 8px rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.15)`
                  }}
                >
                  {/* Glossy highlight strip */}
                  <div className="absolute top-0 left-1/4 w-1.5 h-full rounded-full" style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    filter: 'blur(1px)'
                  }}></div>
                </div>
              </div>
              
              {/* Day label */}
              <span className="text-xs font-medium text-gray-700 mt-3">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}