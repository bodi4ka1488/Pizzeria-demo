    let center = [50.402270061694075, 30.37076258590746];
        // Создаём карту
        let map2 = L.map('map').setView(center, 30);
        // Настраиваем OSM
        L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 8
            }).addTo(map2);

        // добавляем маркер в указанном месте
        L.marker(center).addTo(map2);
                latitude = 50.402270061694075,
                longitude = 30.37076258590746;