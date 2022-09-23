import { client } from "../sanity";

function apiCall() {
  return client.fetch(
    `*[_type == 'person'] | [0] {
      name,
      image,
      title,
      introduction,
      keyInfo{
        location,
        birthYear,
        emailAddress,
        phoneNumber,
        websiteUrl,
        githubHandle,
        linkedInHandle,
        twitterHandle,
        instagramHandle,
      },
      expertise[]{
        name,
        technologies,
      },
      jobs[]->{
        _id,
        company->{
          name,
        },
        title,
        start,
        end,
        title2,
        start2,
        end2,
        description,
      },
      professionalProjects[]->{
        _id,
        title,
        company->{
          name
        },
        readableUrl,
        url,
        githubUrl,
        logo,
        start,
        end,
        description,
        role {
          title,
          description,
        },
        technologies,
      },
      personalProjects[]->{
        _id,
        title,
        readableUrl,
        url,
        githubUrl,
        logo,
        start,
        end,
        description,
        role {
          title,
          description,
        },
        technologies,
      },
      education[]->{
        _id,
        institutionName,
        degree,
        description,
        start,
        end,
      },
      volunteerWorkPositions[]->{
        _id,
        title,
        organizationName,
        position,
        description,
        start,
        end,
      },
    }`
  );
}

export default apiCall
