import React from 'react';
import DateTime from '../DateTime/DateTime';
import DateTimePretty from '../DateTimePretty/DateTimePretty';

const PrettyDateTime = DateTimePretty(DateTime);

const Video = ({ url, date }) => {
  const getVideoId = (url) => {
    try {
      const match = url.match(/rutube\.ru\/video\/([a-f0-9]+)/i);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  const videoId = getVideoId(url);
  const embedUrl = videoId 
    ? `https://rutube.ru/play/embed/${videoId}?autoplay=0&controls=1&quality=hd`
    : url;

  return (
    <div className="video-card">
      <div className="video-wrapper">
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`rutube-video-${videoId || 'custom'}`}
          loading="lazy"
        />
      </div>
      <PrettyDateTime date={date} />
    </div>
  );
};

export default Video;