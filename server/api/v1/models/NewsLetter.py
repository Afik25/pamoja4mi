from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table, BOOLEAN
from api.v1.models.mixins import TimeMixin


class NewsLetter(SQLModel, TimeMixin, table=True):
    __tablename__ = "newsletters"

    id: int = Field(primary_key=True, nullable=False)
    mail: str = Field(sa_column=Column(
        "mail", String, nullable=True, unique=True))
    # is_active : still subscribed or unsubscribed
    is_active: bool = Field(sa_column=Column(
        "is_active", BOOLEAN, nullable=True, unique=False))
