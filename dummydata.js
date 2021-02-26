const products = [
  {
    id: 17762,
    campus: 'hr-rfp',
    name: 'Kelli Shoes',
    slogan: 'Inventore doloribus aut velit.',
    description:
      'Labore est error quod dignissimos. Nesciunt dicta in qui. Eos id quia facilis aut doloremque voluptatum qui. Quae sunt sed et debitis.',
    category: 'Shoes',
    default_price: '74.00',
    created_at: '2021-02-23T04:22:44.937Z',
    updated_at: '2021-02-23T04:22:44.937Z',
  },
  {
    id: 17763,
    campus: 'hr-rfp',
    name: 'Isabell Cap',
    slogan: 'Consectetur ut maxime consectetur in quasi harum.',
    description:
      'Ducimus et delectus. Error reiciendis doloremque consequatur animi explicabo deleniti. Laboriosam assumenda et quia qui.',
    category: 'Cap',
    default_price: '738.00',
    created_at: '2021-02-23T04:22:44.937Z',
    updated_at: '2021-02-23T04:22:44.937Z',
  },
  {
    id: 17858,
    campus: 'hr-rfp',
    name: 'Miracle Heels',
    slogan: 'Qui adipisci quam consectetur ullam ad neque sed incidunt corporis.',
    description:
      'Illo est voluptatem quo. Natus qui cumque tempora. Consequuntur nihil aut sequi blanditiis libero ipsa modi.',
    category: 'Heels',
    default_price: '686.00',
    created_at: '2021-02-23T04:22:44.937Z',
    updated_at: '2021-02-23T04:22:44.937Z',
  },
  {
    id: 18025,
    campus: 'hr-rfp',
    name: 'Carolyne Pants',
    slogan: 'Odio aut sapiente quas dignissimos odit.',
    description:
      'Aut voluptatem et. Aut dolorem sint earum ut reprehenderit impedit porro eaque vitae. Mollitia voluptate voluptates nam.',
    category: 'Pants',
    default_price: '826.00',
    created_at: '2021-02-23T04:22:44.937Z',
    updated_at: '2021-02-23T04:22:44.937Z',
  },
  {
    id: 18076,
    campus: 'hr-rfp',
    name: 'Alayna Jacket',
    slogan: 'Velit corporis laborum enim eius commodi qui rerum beatae et.',
    description: 'Voluptatibus et aut. Nobis est dolore sed quia. Quaerat ipsa sed.',
    category: 'Jacket',
    default_price: '242.00',
    created_at: '2021-02-23T04:22:44.937Z',
    updated_at: '2021-02-23T04:22:44.937Z',
  },
];

const reviews = [
  {
    product: '17762',
    page: 0,
    count: 5,
    results: [
      {
        review_id: 202281,
        rating: 3,
        summary: 'At est vel quasi quaerat in magnam ut iusto et.',
        recommend: true,
        response: null,
        body:
          'Similique dolorem sapiente provident asperiores quo. Sed totam magni. Nisi tempora numquam. Qui ut natus et.',
        date: '2020-09-30T00:00:00.000Z',
        reviewer_name: 'Americo71',
        helpfulness: 21,
        photos: [
          {
            id: 310932,
            url:
              'https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            id: 310933,
            url:
              'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
          },
        ],
      },
      {
        review_id: 202282,
        rating: 4,
        summary: 'In voluptas aut id magnam consequatur dolore culpa quia quisquam.',
        recommend: true,
        response: null,
        body:
          'Ut eveniet aut neque a. Nemo molestiae modi esse ab nesciunt est hic. Illo excepturi hic sit aperiam esse. Enim a quidem alias illo. Voluptatem laboriosam eligendi cum possimus esse et ex. Rerum praesentium nulla corporis architecto quam provident minima.',
        date: '2020-12-22T00:00:00.000Z',
        reviewer_name: 'Dee.Haag',
        helpfulness: 16,
        photos: [
          {
            id: 310930,
            url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
          },
          {
            id: 310931,
            url:
              'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
        ],
      },
      {
        review_id: 202279,
        rating: 3,
        summary: 'Quo voluptatem in illum ratione molestias autem.',
        recommend: true,
        response: '"Quo ex sequi."',
        body:
          'Perferendis qui non sunt. Iste et ea vero. Tempora atque et ea in ea optio illum quia dolorem. Tenetur sed voluptatem sit rem quia est asperiores.',
        date: '2020-12-11T00:00:00.000Z',
        reviewer_name: 'Clement_Romaguera',
        helpfulness: 13,
        photos: [
          {
            id: 310936,
            url:
              'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
          },
          {
            id: 310937,
            url:
              'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
          },
          {
            id: 310938,
            url:
              'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
        ],
      },
      {
        review_id: 202283,
        rating: 5,
        summary: 'Alias qui at.',
        recommend: true,
        response: null,
        body:
          'Qui cumque quo tempora quia unde. Beatae voluptate similique et fugit voluptas. Nobis voluptatibus dolores. Optio dolores totam ab recusandae veritatis. Maiores debitis consectetur quos perferendis.',
        date: '2020-04-26T00:00:00.000Z',
        reviewer_name: 'Veronica.Rodriguez',
        helpfulness: 5,
        photos: [
          {
            id: 310928,
            url:
              'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            id: 310929,
            url:
              'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
          },
        ],
      },
      {
        review_id: 202278,
        rating: 1,
        summary: 'Temporibus sed architecto fugit quisquam minus molestias dolorum quia itaque.',
        recommend: false,
        response: null,
        body:
          'Omnis libero dolores nulla. Nulla vitae odit quasi ipsum suscipit optio. Cupiditate dolores ea dolorum autem eius.',
        date: '2021-02-03T00:00:00.000Z',
        reviewer_name: 'Merl3',
        helpfulness: 3,
        photos: [
          {
            id: 310939,
            url:
              'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80',
          },
        ],
      },
    ],
  },
];
