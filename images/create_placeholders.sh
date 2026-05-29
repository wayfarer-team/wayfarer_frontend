#!/bin/bash

# Достопримечательности
for img in khan-tengri.jpg son-kul.jpg tash-rabat.jpg ala-archa.jpg berkut.jpg jeti-oguz.jpg; do
  convert -size 1200x800 xc: -pointsize 60 -fill white -gravity center -annotate +0+0 "🏔️ $img" /c/Users/NoutSpace/Downloads/Wayfarer1/images/$img
done

# Регионы
for region in issyk-kul bishkek naryn osh talas chui; do
  convert -size 1200x800 xc: -pointsize 60 -fill white -gravity center -annotate +0+0 "📍 $region" /c/Users/NoutSpace/Downloads/Wayfarer1/images/${region}.jpg
done

# Места отдыха в регионах
declare -A regions
regions["issyk-kul"]="Chon Issyk Tamga petroglyphs Bokonbaevo"
regions["bishkek"]="Oak Park Green Market Mosques"
regions["naryn"]="Mountain Valley Coffee house Shepherd"
regions["osh"]="Sulaiman bazaar Forest caves"
regions["talas"]="Manasatur Meadows Ancient stones"
regions["chui"]="Spa resort Valley camping Burana"

for region in "${!regions[@]}"; do
  for place in ${regions[$region]}; do
    convert -size 1000x700 xc: -pointsize 48 -fill white -gravity center -annotate +0+0 "🌄 $place" /c/Users/NoutSpace/Downloads/Wayfarer1/images/${region}-${place}.jpg
  done
done

echo "✓ Плейсхолдеры изображений созданы!"
