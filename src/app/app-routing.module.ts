import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  { path: 'criar-pensamento',
    component: CriarPensamentosComponent
  },
  { path: 'listar-pensamento',
    component: ListarPensamentosComponent,
  },
  { path: 'pensamentos/excluir-pensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  { path: 'pensamentos/editar-pensamento/:id',
    component: EditarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
