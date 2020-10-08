const path = require('path');
const portfolio = require('./src/data/portfolio.json');
const IMAGE_PATH = './src/images/projects';

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  portfolio.forEach((card) => {
    const {
      title,
      client,
      description,
      image,
      alt,
      link,
      hex
    } = card;

    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);

    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    };

    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}-${ext}`),
      internal: {
        type: 'PortfolioCardImage',
        contentDigest: createContentDigest(data),
      },
    };

    actions.createNode(imageNode);
    const node = {
      title,
      client,
      description,
      image: imageNode,
      alt,
      link,
      hex,
      id: createNodeId(`card-${title}`),
      internal: {
        type: 'PortfolioCard',
        contentDigest: createContentDigest(card),
      }
    };

    actions.createNode(node);
  });
}