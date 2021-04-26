import CollectionItem from 'components/collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = props => {
  console.log(props);
  const { title, items } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
