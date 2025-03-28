
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'

function PaginationSelector(props) {
  page: number; 
  pages: number; 
  onPageChange: (page: number) => void; 
};

    const PaginationSelector = ({ page, pages, onPageChange } => {
      const pageNumbers = []; 
      for (let i = 1, i <= pages; i++) {
        pageNumbers.push(i); 
      }

      return (
        <Pagination>
          <PaginationContent>
            {page !== 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => onPageChange(page - 1)}
                />
              </PaginationItem>
            )}
    
            {pageNumbers.map((number) => (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => onPageChange(number)}
                  isActive={page === number}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
    
            {page !== pageNumbers.length && (
              <PaginationItem>
                <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      );
    };

// PaginationSelector.propTypes = {
//     page: number; 
//     pages: number; 
//     onPageChange: (page: number) => void; 
// }

export default PaginationSelector;
