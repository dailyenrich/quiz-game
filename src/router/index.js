import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import RulesPage from '@/components/RulesPage';
import InvitationCode from '@/components/InvitationCode';
import RankingList from '@/components/RankingList';
import SharePage from '@/components/SharePage';
import PrizePage from '@/components/PrizePage';
import Countdown from '@/components/Countdown';
import Quiz from '@/components/Quiz';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'rules',
          component: RulesPage
        },
        {
          path: 'invitation',
          component: InvitationCode
        },
        {
          path: 'list',
          component: RankingList
        },
        {
          path: 'share',
          component: SharePage
        },
        {
          path: 'prize',
          component: PrizePage
        }
      ]
    },
    {
      path: '/countdown',
      component: Countdown
    },
    {
      path: '/quiz',
      component: Quiz
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
