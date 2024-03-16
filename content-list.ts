// helper-files/content-list.ts
import Content from './content-interface';

class ContentList {
  private contents: Content[];

  constructor() {
    this.contents = [];
  }

  getContents(): Content[] {
    return this.contents;
  }

  addContent(content: Content): void {
    this.contents.push(content);
  }

  getItemCount(): number {
    return this.contents.length;
  }

  getContentHTML(index: number): string {
    if (index < 0 || index >= this.contents.length) {
      return '<p>Error: Index out of range.</p>';
    }

    const item = this.contents[index];
    let html = `
      <div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>Creator: ${item.creator}</p>
    `;

    if (item.imgURL) {
      html += `<img src="${item.imgURL}" alt="${item.title} Image">`;
    }

    if (item.type) {
      html += `<p>Type: ${item.type}</p>`;
    }

    if (item.tags) {
      html += `<p>Tags: ${item.tags.join(', ')}</p>`;
    }

    html += `</div>`;
    return html;
  }
}

export default ContentList;
