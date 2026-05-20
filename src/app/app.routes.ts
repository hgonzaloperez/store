import { Routes } from '@angular/router';
import { Layout } from '@shared/components/layout/layout';
import { List } from './domains/products/pages/list/list';
import { ProductDetail } from './domains/products/pages/produc-detail/product-detail';
import { About } from './domains/info/pages/about/about';
import { NotFound } from './domains/info/pages/not-found/not-found';

export const routes: Routes = [
  {
    path : '',
    component : Layout,
    children: [
      {
        path: '',
        component: List
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'product/:id',
        component: ProductDetail
      }
    ]
  },
  {
    path : '**',
    component : NotFound
  }
  ];
