import { useState } from 'react';
import { ShoppingCart, Star, Heart, ArrowRight, Filter, Instagram, Shirt, Wind, Zap, Flame, X } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  const openModal = (product) => {
  setSelectedProduct(product);
  setShowModal(true);
  setTimeout(() => setIsModalOpen(true), 10);
};

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 500);
  };

  const categories = [
    { id: 'all', name: 'Tous les produits', icon: Flame },
    { id: 'tshirts', name: 'T-Shirts', icon: Shirt },
    { id: 'hoodies', name: 'Hoodies', icon: Wind },
    { id: 'accessories', name: 'Accessoires', icon: Zap }
  ];

  const products = [
    // T-Shirts
    {
      id: 1,
      category: 'tshirts',
      name: 'T-Shirt Fire Fit Classic',
      description: 'T-shirt en coton premium avec logo Fire Fit brodé',
      price: '150 DHS',
      image: '/products/tshirt-classic.png',
      colors: ['Noir', 'Blanc', 'Bleu', 'Orange'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 5,
      badge: 'Bestseller'
    },
    {
      id: 2,
      category: 'tshirts',
      name: 'T-Shirt Performance',
      description: 'Tissu respirant anti-transpiration pour entraînement intense',
      price: '180 DHS',
      image: '/products/tshirt-performance.png',
      colors: ['Noir', 'Gris', 'Bleu'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 5,
      badge: null
    },
    {
      id: 3,
      category: 'tshirts',
      name: 'T-Shirt Femme Fire Fit',
      description: 'Coupe ajustée confortable pour femme',
      price: '160 DHS',
      image: '/products/tshirt-femme.png',
      colors: ['Rose', 'Noir', 'Blanc', 'Violet'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      rating: 5,
      badge: null
    },

    // Hoodies
    {
      id: 4,
      category: 'hoodies',
      name: 'Hoodie Fire Fit Premium',
      description: 'Sweat à capuche épais, parfait pour l\'hiver',
      price: '350 DHS',
      image: '/products/hoodie-premium.png',
      colors: ['Noir', 'Gris', 'Bleu Marine'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 5,
      badge: 'Nouveau'
    },
    {
      id: 5,
      category: 'hoodies',
      name: 'Hoodie Zip Fire Fit',
      description: 'Hoodie zippé avec poches kangourou',
      price: '380 DHS',
      image: '/products/hoodie-zip.png',
      colors: ['Noir', 'Gris', 'Orange'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 5,
      badge: null
    },
    {
      id: 6,
      category: 'hoodies',
      name: 'Hoodie Femme Fire Fit',
      description: 'Hoodie confortable coupe femme',
      price: '360 DHS',
      image: '/products/hoodie-femme.png',
      colors: ['Rose', 'Noir', 'Gris'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      rating: 5,
      badge: null
    },

    // Accessoires
    {
      id: 7,
      category: 'accessories',
      name: 'Gourde Fire Fit',
      description: 'Bouteille isotherme 750ml en acier inoxydable',
      price: '120 DHS',
      image: '/products/gourde.png',
      colors: ['Noir', 'Bleu', 'Orange'],
      sizes: ['750ml'],
      rating: 5,
      badge: 'Bestseller'
    },
    {
      id: 8,
      category: 'accessories',
      name: 'Shaker Protéine Fire Fit',
      description: 'Shaker 600ml avec compartiment à poudre',
      price: '80 DHS',
      image: '/products/shaker.png',
      colors: ['Noir', 'Transparent'],
      sizes: ['600ml'],
      rating: 4,
      badge: null
    },
    {
      id: 9,
      category: 'accessories',
      name: 'Serviette Fire Fit',
      description: 'Serviette microfibre ultra-absorbante',
      price: '100 DHS',
      image: '/products/serviette.png',
      colors: ['Noir', 'Bleu', 'Orange'],
      sizes: ['80x40cm'],
      rating: 5,
      badge: null
    },
    {
      id: 10,
      category: 'accessories',
      name: 'Casquette Fire Fit',
      description: 'Casquette ajustable avec logo brodé',
      price: '90 DHS',
      image: '/products/casquette.png',
      colors: ['Noir', 'Bleu', 'Blanc'],
      sizes: ['Unique'],
      rating: 5,
      badge: null
    },
    {
      id: 11,
      category: 'accessories',
      name: 'Sac de Sport Fire Fit',
      description: 'Sac de sport 40L avec compartiments multiples',
      price: '250 DHS',
      image: '/products/sac-sport.png',
      colors: ['Noir', 'Gris'],
      sizes: ['40L'],
      rating: 5,
      badge: 'Nouveau'
    },
    {
      id: 12,
      category: 'accessories',
      name: 'Tasse Fire Fit',
      description: 'Tasse en ciramique avec logo Fire Fit',
      price: '30 DHS',
      image: '/products/tasse.png',
      colors: ['Noir', 'Orange', 'Bleu'],
      sizes: ['Unique'],
      rating: 4,
      badge: null
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-3">


      {/* Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Effet de fond */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-fire-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-fire-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            BOUTIQUE FIRE FIT
          </h1>
          <div className="w-32 h-2 bg-fire-orange mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de vêtements et accessoires Fire Fit

          </p>
        </div>
      </section>


      {/* Categories Filter */}
      <section className="top-[124px] bg-white border-b border-gray-200 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Catégories</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2
                    ${selectedCategory === cat.id
                      ? 'bg-fire-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-bold text-slate-900">{filteredProducts.length}</span> produit(s) trouvé(s)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => openModal(product)}
              >
                {/* Product Image */}
                <div 
                  className="relative h-64 bg-white overflow-hidden cursor-pointer flex items-center justify-center"
                  
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="%23e5e7eb"/><text x="50%" y="50%" font-size="60" fill="%239ca3af" text-anchor="middle" dy=".3em">Fire Fit</text></svg>';
                    }}
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${
                        product.badge === 'Bestseller' ? 'bg-fire-orange' : 'bg-green-500'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating
                            ? 'text-fire-orange fill-fire-orange'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                  </div>

                  {/* Colors */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-2">Couleurs disponibles:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-lg"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-fire-blue">{product.price}</span>
                    </div>
                    <button className="group/btn bg-fire-orange hover:bg-orange-600 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
              <div className="w-16 h-16 bg-fire-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Retrait en Salle</h3>
              <p className="text-gray-600">
                Commandez et récupérez vos articles directement à Fire Fit
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl">
              <div className="w-16 h-16 bg-fire-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Qualité Premium</h3>
              <p className="text-gray-600">
                Tous nos produits sont sélectionnés pour leur qualité exceptionnelle
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pour Membres</h3>
              <p className="text-gray-600">
                Réductions exclusives pour les membres Fire Fit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Instagram className="w-16 h-16 text-fire-orange mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ENVIE DE COMMANDER ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Contactez-nous sur Instagram ou passez directement à la salle pour découvrir tous nos produits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/firefit.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Instagram className="w-6 h-6" />
              <span>COMMANDER SUR INSTAGRAM</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0537735052"
              className="group inline-flex items-center justify-center space-x-2 bg-fire-orange hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>APPELER MAINTENANT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && selectedProduct && (
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div 
            className={`relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out ${
              isModalOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 md:h-auto bg-white flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain p-8"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="800" height="800" fill="%23e5e7eb"/><text x="50%" y="50%" font-size="100" fill="%239ca3af" text-anchor="middle" dy=".3em">Fire Fit</text></svg>';
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-8">
                <h2 className="text-3xl font-black text-slate-900 mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < selectedProduct.rating
                          ? 'text-fire-orange fill-fire-orange'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-bold text-gray-600">({selectedProduct.rating}.0)</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-1">Prix</p>
                  <p className="text-4xl font-black text-fire-orange">{selectedProduct.price}</p>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Couleurs disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded-xl font-semibold border border-gray-200 hover:border-fire-orange transition-colors cursor-pointer"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Tailles disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded-xl font-semibold border border-gray-200 hover:border-fire-orange transition-colors cursor-pointer"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/firefit.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-bold text-center transition-all hover:scale-105"
                  >
                    Commander sur Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;