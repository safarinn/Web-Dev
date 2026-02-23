// src/app/components/product-list/product-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedImage: string | null = null;

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with A16 chip. High performance and great camera.',
      price: 599000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Android smartphone with amazing display and camera.',
      price: 489000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hd4/69065015853086.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h6b/69065016377374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/hed/69065019523102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-sirenevyi-108915896/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max 256Gb is the embodiment of innovation and style, offering impeccable performance and unsurpassed opportunities for those who are always on the move.',
      price: 803897,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p29/64476207.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/?c=750000000'
    },
    {
      id: 4,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни',
      price: 60480,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
    },
    {
      id: 5,
      name: 'FC 26 PS5 PS5 RUS SUB',
      description: 'FC 26 для PS5 — новейший спортивный симулятор, который перенесет вас в мир футбольных баталий, где каждый матч наполнен адреналином и реалистичными моментами.',
      price: 26985,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p7a/55359573.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/p7a/55359573.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/p7b/55359574.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/fc-26-ps5-143170903/?c=750000000'
    },
    {
      id: 6,
      name: 'Утюг Vitek VT-1215 розовый',
      description: 'Утюг Vitek VT-1215 PK – это гарант отсутствия складочек на Вашей одежде. Это быстрое и комфортное утюжение постельного белья с минимумом энергозатрат. Данная модель потребляет всего лишь 2400 Вт электроэнергии, которую она тратит на выпуск пара со скоростью 140 г/мин и нагрев подошвы',
      price: 6667,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/haa/63760686743582.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/haa/63760686743582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5b/63760687398942.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/hf5/63760688185374.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/vitek-vt-1215-rozovyi-3800382/?c=750000000'
    },
    {
      id: 7,
      name: 'Попсокет двухсторонний черный',
      description: 'Присоска для телефона липпер – это удобный и функциональный силиконовый держатель, предназначенный для мобильных телефонов. С его помощью вы сможете удерживать ваше устройство в надежном положении, не беспокоясь о его падении или скольжении',
      price: 90,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/p52/18970532.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p01/p52/18970532.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/p55/18970533.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/popsoket-dvuhstoronnii-chernyi-133105774/?c=750000000'
    },
    {
      id: 8,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном, которое идеально подходит для повседневного использования',
      price: 39900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
    {
      id: 9,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb Dual eSim серебристый',
      description: 'Apple iPhone 17 Pro 256Gb Dual eSim — это воплощение инноваций и бескомпромиссного качества в мире смартфонов. Тройная камера и мощный процессор A19 Pro открывают безграничные возможности для творчества и развлечений.\n' +
        '\n',
      price: 729553,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/p01/74062769.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p01/74062769.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/p03/74062771.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p04/74062773.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-dual-esim-serebristyi-148425720/?c=750000000'
    },
    {
      id: 10,
      name: 'Смартфон Samsung Galaxy A26 5G 8 ГБ/256 ГБ белый',
      description: 'Samsung Galaxy A26 5G 8 ГБ/256 ГБ — это мощный и стильный смартфон с поддержкой сетей пятого поколения, который станет вашим надёжным помощником в повседневной жизни.',
      price: 127960,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/p38/30556010.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/p38/30556010.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p77/p38/30556012.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p38/30556013.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a26-5g-8-gb-256-gb-belyi-136435860/?c=750000000'
    },


  ];

  shareWhatsApp(link: string) {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + link)}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

  setImage(image: string) {
    this.selectedImage = image;
  }
}
