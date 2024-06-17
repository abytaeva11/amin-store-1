import {
    HomePage,
    AboutPage,
    ClientsPage,
    ContactPage,
    BasedAMDPage,
    BasketPage,
    ConfiguratorPage,
    DecorPage,
    ExtremeSeriesPage,
    InexpensivePage,
    InstallationPage,
    PowerfulPage,
    BuildProductPage,
    GamePage,
    CreateFeedBackPage,
    LoginPage,
    OrdersPage,
    DeliveryPage,
    ProductPage,
    ProductView,
    AddProduct,
    EditProduct,
    FeedbacksPage,
    FeedbackView,
    AddDelivery,
    DeliveryView,
    EditDelivery,
    AddOrder,
    EditOrders,
    OrdersView,
    ComputerPage,
    ComputerView,
    AddComputer,
    EditComputer,
} from "src/pages";
import MenuBurder from "src/components/header/modules/menu-burger/menu-burder";


export const routes: RouteList[] = [
    {
        path:"/menu-tabs",
        element:<MenuBurder/>,
        isPublic:true
    },
    {
        path: "/logo",
        element: <HomePage />,
        isPublic: true
    },
    {
        path: "/about",
        element: <AboutPage />,
        isPublic: true
    },
    {
        path: "/clients",
        element: <ClientsPage />,
        isPublic: true
    },
    {
        path: "/contact",
        element: <ContactPage />,
        isPublic: true
    },
    {
        path: "/basedAMD",
        element: <BasedAMDPage />,
        isPublic: true
    },
    {
        path: "/",
        element: <ConfiguratorPage />,
        isPublic: true
    },
    {
        path: "/inexpensive",
        element: <InexpensivePage />,
        isPublic: true
    },
    {
        path: "/game",
        element: <GamePage />,
        isPublic: true
    },
    {
        path: "/powerful",
        element: <PowerfulPage />,
        isPublic: true
    },
    {
        path: "/basket",
        element: <BasketPage />,
        isPublic: true
    },
    {
        path: "/decor",
        element: <DecorPage />,
        isPublic: true
    },
    {
        path: "/tab-installments",
        element: <InstallationPage />,
        isPublic: true
    },
    {
        path: "/tab-extreme-series",
        element: <ExtremeSeriesPage />,
        isPublic: true
    },
    {
        path: "/test",
        element: <BuildProductPage />,
        isPublic: true
    },
    {
        path: "/login",
        element: <LoginPage />,
        isPublic: true
    },
    {
        path: "/feedback",
        element: <CreateFeedBackPage />,
        isPublic: true
    },
    // ADMIN PAGES
    {
        path: "/admin",
        element: <FeedbacksPage />,
        isPublic: false
    },
    // FEEDBACK
    {
        path: "/admin/feedbacks",
        element: <FeedbacksPage />,
        isPublic: false
    },
    {
        path: "/admin/feedback/:feedbackId",
        element: <FeedbackView />,
        isPublic: false
    },


    // PRODUCT
    {
        path: "/admin/products",
        element: <ProductPage />,
        isPublic: false
    },
    {
        path: "/admin/product/:productId",
        element: <ProductView />,
        isPublic: false
    },
    {
        path: "/admin/products/add-product",
        element: <AddProduct />,
        isPublic: false
    },
    {
        path: "/admin/product/:productId/edit-product",
        element: <EditProduct />,
        isPublic: false
    },


    // COMPUTER
    {
        path: "/admin/computers",
        element: <ComputerPage />,
        isPublic: false
    },
    {
        path: "/admin/computers/:computerId",
        element: <ComputerView />,
        isPublic: false
    },
    {
        path: "/admin/computers/add-computer",
        element: <AddComputer />,
        isPublic: false
    },
    {
        path: "/admin/computers/:computerId/edit-computer",
        element: <EditComputer />,
        isPublic: false
    },

    // DELIVERY
    {
        path: "/admin/delivery",
        element: <DeliveryPage />,
        isPublic: false
    },
    {
        path: "/admin/delivery/:deliveryId",
        element: <DeliveryView />,
        isPublic: false
    },
    {
        path: "/admin/delivery/add-delivery",
        element: <AddDelivery />,
        isPublic: false
    },
    {
        path: "/admin/delivery/:deliveryId/edit-delivery",
        element: <EditDelivery />,
        isPublic: false
    },

    // ORDERS
    {
        path: "/admin/orders",
        element: <OrdersPage />,
        isPublic: false
    },
    {
        path: "/admin/orders/:orderId",
        element: <OrdersView />,
        isPublic: false
    },
    {
        path: "/admin/orders/add-order",
        element: <AddOrder />,
        isPublic: false
    },
    {
        path: "/admin/orders/:orderId/edit-order",
        element: <EditOrders />,
        isPublic: false
    },
]
