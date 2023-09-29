"use client"

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = "pk.eyJ1IjoidGhlamFzaGFyaSIsImEiOiJjbGViNGxneGIxNXk4M3FtZXN2bmlybnZ2In0.xH_17wx1jpV5Kfw7ntyAbQ";


export default function Home(){

    const mapContainerRef = useRef(null);

	useEffect(() => {
	    const map = new mapboxgl.Map({
			container: mapContainerRef.current, // container ID
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [78.1108, 9.9201], // starting position [lng, lat]
			zoom: 15 // starting zoom
		});
        
        map.on('click', (event) => {
            const features = map.queryRenderedFeatures(event.point, {
            layers: ['chicago-parks']
            });
            if (!features.length) {
            return;
            }
            const feature = features[0];
             
            const popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
            .addTo(map);
        });
    
		// const draw = new MapboxDraw({
		// 	displayControlsDefault: true,
		// 	// Select which mapbox-gl-draw control buttons to add to the map.
		// 	controls: {
		// 	polygon: true,
		// 	trash: true
		// },
		// // Set mapbox-gl-draw to draw by default.
		// // The user does not have to click the polygon control button first.
		// defaultMode: 'draw_polygon'
		// });
		// map.addControl(draw);
		 
		// map.on('draw.create', updateArea);
		// map.on('draw.delete', updateArea);
		// map.on('draw.update', updateArea);
		 
		// function updateArea(e) {
		// 	const data = draw.getAll();
		// 	const answer = document.getElementById('calculated-area');
		// 	if (data.features.length > 0) {
		// 		const area = turf.area(data);
		// 		// Restrict the area to 2 decimal points.
		// 		const rounded_area = Math.round(area * 100) / 100;
		// 		answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
		// 	} else {
		// 		answer.innerHTML = '';
		// 		if (e.type !== 'draw.delete')
		// 		alert('Click the map to draw a polygon.');
		// 	}
		// }
	    return () => map.remove();
	  }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className="w-full h-full bg-gray-100">
            <div className="relative h-full w-full">
                <div className="map-container" ref={mapContainerRef} />
                    {/* <div className="calculation-box">
                        <p className="text-p" >Click the map to draw a polygon.</p>
                    <div id="calculated-area"></div>
                </div> */}
            </div>
        </main>
    
    )
}